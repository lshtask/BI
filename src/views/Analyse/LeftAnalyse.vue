<template>
  <a-card title="智能分析" class="container_left_card">
    <a-form ref="formRef" name="custom-validation" :model="formState" v-bind="layout" @finish="handleFinish">
      <a-form-item label="分析目标" name="goal" :rules="[{ required: true, message: '请输入你的需求分析' }]">
        <a-textarea v-model:value="formState.goal" placeholder="请输入你的需求分析" allow-clear />
      </a-form-item>
      <a-form-item label="图表名称" name="name">
        <a-input v-model:value="formState.name" placeholder="请输入图表名称" autocomplete="off" />
      </a-form-item>
      <a-form-item label="图表类型" name="chartType">
        <a-select ref="select" v-model:value="value" :options="options1" style="width: 100%"></a-select>
      </a-form-item>
      <a-form-item label="原始数据" name="file">
        <a-upload :file-list="fileList" accept=".xlsx" :before-upload="beforeUpload" @remove="handleRemove">
          <a-button>
            <upload-outlined></upload-outlined>
            上传CSV文件
          </a-button>
        </a-upload>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" html-type="submit">提交</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
      </a-form-item>
    </a-form>

  </a-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import type { FormInstance, SelectProps, UploadProps } from 'ant-design-vue';
import { useChatStore } from "@/store";
import { fetchAnalyseForm, fetchAnalyseFormData } from "@/api/analyse";
interface FormState {
  goal: string;
  chartType: string;
  name: string;
  file: any;
}
const formRef = ref<FormInstance>();

const chatStore = useChatStore()

const formState = reactive<FormState>({
  goal: '',
  chartType: '',
  name: '',
  file: '',
});

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};
const fileList = ref<UploadProps['fileList']>([]);
const value = ref<string>('折线图');

const options1 = ref<SelectProps['options']>([
  {
    value: '折线图',
    label: '折线图',
  },
  {
    value: '柱状图',
    label: '柱状图',
  },
  {
    value: '堆叠图',
    label: '堆叠图',
  },
  {
    value: '饼图',
    label: '饼图',
  },
  {
    value: '雷达图',
    label: '雷达图',
  },

]);



const handleFinish = async (values: FormState) => {
  chatStore.open = true
  try {
    await fetchAnalyseForm({ ...values, chartType: value.value }, {}, fileList.value[0])
    chatStore.open = false
  } catch (error) {
    chatStore.open = false
  }

};




const handleRemove: UploadProps['onRemove'] = file => {
  const index = fileList.value.indexOf(file);
  const newFileList = fileList.value.slice();
  newFileList.splice(index, 1);
  fileList.value = newFileList;
};

const beforeUpload: UploadProps['beforeUpload'] = async (file) => {
  // const res = await fetchAnalyseFormData(file)
  // console.log(res);


  fileList.value = [...(fileList.value || []), file];
  return false;
};



const resetForm = () => {
  formRef.value.resetFields();
  fileList.value = []
};
</script>
