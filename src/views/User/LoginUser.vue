<template>
  <div class="container" >
    
    <div class="box" :class="{ box_rolling: isRolling }">
      <div class="box_register">
        <Login @onrote="handleRegisterClick" />
      </div>
      <div class="box_login">
        <Register @onrote="handleRegisterClick" />
      </div>
    </div>
    <LoginFooter />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from "vue-router";
import LoginFooter from './LoginFooter.vue';
import Login from './Login.vue';
import Register from './Register.vue';


const isRolling = ref<boolean>(false)





const handleRegisterClick = () => {

  isRolling.value = !isRolling.value
}


</script>

<style lang="less" scoped>
.box {
position: relative;
  &_register,
  &_login {
    transform-style: preserve-3d; //表示所有子元素在3D空间中呈现
    backface-visibility: hidden; //元素背面向屏幕时是否可见
    transition-duration: 0.5s; // 0.5秒内反转
    transition-timing-function: "ease-in";
    
  }

  &_login {
    height: 500px;
    transform: rotateY(180deg);
    visibility: hidden; //元素不可见，但占据空间
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
}

.container {
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  background-image: url(https://fanyiapp.cdn.bcebos.com/cms/image/eab6731f7ef5c2b5ddef8ea51c349d8e.jpg);

  &_main {
    
    width: 500px;
    height: 600px;
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
      background: rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      pointer-events: none;
    }

    // p {
    //   text-align: center;
    //   height: 46px;
    //   font-size: 16px;

    // }
  }
}

.box_rolling {

  .box_register {
    transform: rotateY(180deg); //反转180度
    visibility: hidden;
  }

  .box_login {
    height: 500px;
    transform: rotateY(360deg); //反转360度
    visibility: visible;
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
