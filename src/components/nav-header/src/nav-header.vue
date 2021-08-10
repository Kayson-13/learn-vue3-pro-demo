<template>
  <div class="nav-header">
    <i
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fold-menu"
      @click="handleFold"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['handleFold'],
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleFold = () => {
      isFold.value = !isFold.value;
      emit('handleFold', isFold.value);
    };

    return { isFold, handleFold };
  }
});
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
