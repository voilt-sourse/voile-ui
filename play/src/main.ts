import { createApp } from 'vue';
import VIcon from '@voile-ui/components/icon';
import VDivider from '@voile-ui/components/divider';
import '@voile-ui/theme-chalk/src/index.scss';
import App from './App.vue';

const components = [VIcon, VDivider];
const INSTALLED_KEY = Symbol('INSTALLED_KEY');

const Voile = {
  install(app: any) {
    // 如果该组件库已经安装过了，则不进行安装
    if (app[INSTALLED_KEY]) return;
    // 将标识值设置为 true，表示已经安装了
    app[INSTALLED_KEY] = true;
    // 循环组件库中的每个组件进行安装
    components.forEach((c) => app.use(c));
  },
};

const app = createApp(App);
app.use(Voile);
app.mount('#app');
