<template>
  <div style="margin-right: 12px">
    <a-space>
      <a style="padding: 0 12px; display: inline-block; user-select: none" @click="handleClick">
        <BgColorsOutlined />
      </a>
      <a-dropdown>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <template #icon>
                <SettingOutlined />
              </template>
              <span @click="handleSettingClick">个人设置</span>
            </a-menu-item>
            <a-menu-item>
              <template #icon>
                <LogoutOutlined />
              </template>
              <span @click="handleLogoutClick">退出登录</span>
            </a-menu-item>
          </a-menu>
        </template>
        <a-avatar shape="square" size="small">
          <template #icon>
            <!-- <UserOutlined /> -->
            <img src="../../assets/hmx.JPG" alt="">
          </template>
          {{ currentUser.nickname }}
        </a-avatar>
      </a-dropdown>
    </a-space>
    <PersonalSetting :open="settingState"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { UserOutlined, SettingOutlined, LogoutOutlined, BgColorsOutlined } from '@ant-design/icons-vue';
import PersonalSetting from "@/components/PersonalSetting/PersonalSetting.vue";
import { apply, randomTheme } from '../../hooks/useTheme';
import router from "@/router";

export type CurrentUser = {
  nickname: string;
  avatar?: string;
};

defineProps<{
  currentUser: CurrentUser;
}>();

const settingState = ref<boolean>(false)
const route = useRouter()
const handleClick = () => {
  apply(randomTheme());
};

const handleSettingClick = () => {
  settingState.value = true

}
const handleLogoutClick = () => {
  localStorage.clear()
  setTimeout(() => {
    route.replace('/login')
  }, 100)

}
</script>
