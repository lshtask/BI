<template>
  <a-card title="智能分析" class="container_left_card">
    <a-form ref="formRef" name="custom-validation" :model="formState" :rules="rules" v-bind="layout"
      @finish="handleFinish" @validate="handleValidate" @finishFailed="handleFinishFailed">
      <a-form-item has-feedback label="分析目标" name="pass">
        <a-textarea v-model:value="formState.pass" placeholder="请输入你的需求分析" allow-clear />
      </a-form-item>
      <a-form-item has-feedback label="图表名称" name="checkPass">
        <a-input v-model:value="formState.checkPass" placeholder="请输入图表名称" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="图表类型" name="age">
        <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="原始数据" name="age">
        <a-upload :file-list="fileList" :before-upload="beforeUpload" @remove="handleRemove">
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
import type { Rule } from 'ant-design-vue/es/form';
import type { FormInstance } from 'ant-design-vue';
import type { UploadProps } from 'ant-design-vue';

interface FormState {
  pass: string;
  checkPass: string;
  age: number | undefined;
}
const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  pass: '',
  checkPass: '',
  age: undefined,
});
const fileList = ref<UploadProps['fileList']>([]);
const uploading = ref<boolean>(false);


const checkAge = async (_rule: Rule, value: number) => {
  if (!value) {
    return Promise.reject('Please input the age');
  }
  if (!Number.isInteger(value)) {
    return Promise.reject('Please input digits');
  } else {
    if (value < 18) {
      return Promise.reject('Age must be greater than 18');
    } else {
      return Promise.resolve();
    }
  }
};
const validatePass = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password');
  } else {
    if (formState.checkPass !== '') {
      formRef.value.validateFields('checkPass');
    }
    return Promise.resolve();
  }
};
const validatePass2 = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password again');
  } else if (value !== formState.pass) {
    return Promise.reject("Two inputs don't match!");
  } else {
    return Promise.resolve();
  }
};
const rules: Record<string, Rule[]> = {
  pass: [{ required: true, validator: validatePass, trigger: 'change' }],
  checkPass: [{ validator: validatePass2, trigger: 'change' }],
  age: [{ validator: checkAge, trigger: 'change' }],
};
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};
const handleFinish = (values: FormState) => {
};
const handleFinishFailed = errors => {
};
const resetForm = () => {
  formRef.value.resetFields();
};
const handleValidate = (...args) => {
};

const handleRemove: UploadProps['onRemove'] = file => {
  const index = fileList.value.indexOf(file);
  const newFileList = fileList.value.slice();
  newFileList.splice(index, 1);
  fileList.value = newFileList;
};

const beforeUpload: UploadProps['beforeUpload'] = file => {
  fileList.value = [...(fileList.value || []), file];
  return false;
};

const handleUpload = () => {
  const formData = new FormData();
  fileList.value.forEach((file: UploadProps['fileList'][number]) => {
    formData.append('files[]', file as any);
  });
  uploading.value = true;


};
</script>
