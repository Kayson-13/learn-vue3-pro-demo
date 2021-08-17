import type { App } from 'vue';
import { utcToDateString } from '@/utiis/format-time';

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return utcToDateString(value);
    }
  };
}
