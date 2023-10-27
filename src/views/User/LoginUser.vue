<template>
  <div class="container">

    <div class="container_main">
      <h1 class="container_head">lishuoBI</h1>
      <p>账号密码登录</p>
      <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.username" style="width: 200">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item class="container_form">
          <a-button type="primary" html-type="submit" class="container_form_button">登录</a-button>
        </a-form-item>
      </a-form>

    </div>
    <LoginFooter />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import LoginFooter from './LoginFooter.vue';
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  background-image: url(https://fanyiapp.cdn.bcebos.com/cms/image/eab6731f7ef5c2b5ddef8ea51c349d8e.jpg);


  &_head {
    text-align: center;
  }

  &_form {
    &_button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 40px;
      margin: 0 auto;
      padding: 5px 12px;
      background: #0f71e2;
      border-radius: 4px;
      margin-top: 20px;
    }
  }

  &_main {
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
</style>
