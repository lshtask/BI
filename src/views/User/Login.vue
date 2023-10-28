<template>
  <div class="container_main">
    <h1 class="container_head">lishuoBI</h1>
    <p>账号密码登录</p>
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
      <a-form-item class="container_form">
        <a-button type="primary" html-type="submit" class="container_form_button">登录</a-button>
      </a-form-item>
    </a-form>
    <a-button type="link" class="to_register" @click="handleClick">去注册>></a-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from "vue-router";
import { message } from 'ant-design-vue';
import { fetchLogin } from "@/api/login";
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

interface Emit {
  (ev: 'onrote'): void
}
const emit = defineEmits<Emit>()

const router = useRouter();

interface FormState {
  userAccount: string;
  userPassword: string;
}
const formState = reactive<FormState>({
  userAccount: '',
  userPassword: '',
});
const onFinish = async (values: any) => {
  try {
    await fetchLogin(values)
  } catch (error) {
    localStorage.setItem('token', error?.data?.id)
    router.push('/analyse')

  }



};

const handleClick = () => {
  emit('onrote');
}


</script>

<style lang="less" scoped>
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

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

&container_main {
  width: 500px;
  height: 500px;
  padding: 50px;
  box-shadow: 0 24px 39px 0 rgba(0, 100, 255, 0.13);
  border-radius: 20px;
  position: relative;
  margin: 0 auto;

  p {
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    /* 半透明的白色背景 */
    pointer-events: none;
    /* 防止伪元素干扰鼠标事件 */
  }

  p {
    text-align: center;
    height: 46px;
    font-size: 16px;

  }
}

.to_register {
  font: 14px;
  width: 100%;
  margin-top: 90px;
  text-align: right;
}
</style>