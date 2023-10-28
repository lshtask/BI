<template>
  <div class="container_main">
    <h1 class="container_head">lishuoBI</h1>
    <p>注册</p>
    <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish">
      <a-form-item name="userAccount" :rules="[{ required: true, message: '请输入用户名' }]">
        <a-input v-model:value="formState.userAccount" style="width: 200">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item name="userPassword" :rules="[{ required: true, message: '请输入密码' }]">
        <a-input-password v-model:value="formState.userPassword">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item name="checkPassword" :rules="[{ required: true, message: '确认密码' }]">
        <a-input-password v-model:value="formState.checkPassword">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item class="container_form">
        <div class="container_form_wrap">
          <a-button html-type="submit" type="primary" class="container_form_button">注册</a-button>
        </div>

      </a-form-item>
    </a-form>
    <a-button type="link" class="to_login" @click="handleRegisterClick">去登录>></a-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { fetchRegister } from "@/api/login";
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

interface Emit {
  (ev: 'onrote'): void
}
const emit = defineEmits<Emit>()


interface FormState {
  userAccount: string;
  userPassword: string;
  checkPassword: string;
}
const formState = reactive<FormState>({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
});
const onFinish = async (values: any) => {
  await fetchRegister(values)
};

const handleRegisterClick = () => {
  emit('onrote')
}


</script>

<style scoped lang="less">
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.to_login {
  font: 14px;
  width: 100%;
  margin-top: 40px;
  text-align: right;
}

.container_form_button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding: 5px 12px;
  // background: #0f71e2;
  border-radius: 4px;
  margin: 0 auto;
}
</style>