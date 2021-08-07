import { App } from 'vue';
import 'element-plus/lib/theme-chalk/base.css';
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElAutocomplete,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
} from 'element-plus';

const components = [
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElAutocomplete,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
];

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn);
  }
}
