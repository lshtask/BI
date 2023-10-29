import '@ant-design-vue/pro-layout/dist/style.css';
import 'ant-design-vue/dist/antd.variable.min.css';

import { createApp } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import NaiveUI from 'naive-ui';
import { setupRouter } from './router';
import App from './App.vue';
import { useChatStore } from './store';
async function bootstrap() {
  const app = createApp(App);
  await setupRouter(app);
  const chatStore = useChatStore();
  chatStore.init();
  app
    .use(ConfigProvider)
    .use(NaiveUI)
    .use(ProLayout)
    .use(PageContainer)
    .mount('#app');
}

bootstrap();
