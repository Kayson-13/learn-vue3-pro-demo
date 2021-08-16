<template>
  <div class="nav-header">
    <i
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fold-menu"
      @click="handleFold"
    ></i>
    <div class="content">
      <breadcrumb />
      <user-info :breadcrumbs="breadcrumbs" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';

import UserInfo from './user-info.vue';
import Breadcrumb from '@/base-ui/breadcrumb';
import { pathMapBreadcrumbs } from '@/utiis/map-menus';

export default defineComponent({
  emits: ['handleFold'],
  components: { UserInfo, Breadcrumb },
  setup(props, { emit }) {
    const isFold = ref(false);

    const store = useStore();
    const breadcrumbs = computed(() => {
      const menus = store.state.login.userMenus;
      const route = useRoute();
      const currentPath = route.path;
      return pathMapBreadcrumbs(menus, currentPath);
    });

    const handleFold = () => {
      isFold.value = !isFold.value;
      emit('handleFold', isFold.value);
    };

    return { isFold, breadcrumbs, handleFold };
  }
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
