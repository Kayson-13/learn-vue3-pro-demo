<template>
  <div class="page-content">
    <pra-table v-bind="contentTableConfig" :userList="userList" @selectionChange="selectionChange">
      <template #headerHandle>
        <el-button size="medium" type="primary">新建用户</el-button>
      </template>
      <template #status="scope">
        <el-button size="mini" :type="scope.row.enable ? 'success' : 'danger'" plain>{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle>
        <el-button icon="el-icon-edit" size="mini" type="text">编辑</el-button>
        <el-button icon="el-icon-delete" size="mini" type="text">删除</el-button>
      </template>
    </pra-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

import PraTable from '@/base-ui/table/src/table.vue';

export default defineComponent({
  components: { PraTable },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    }
  },
  setup() {
    const store = useStore();
    store.dispatch('system/getPageList', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    });

    const userList = computed(() => store.state.system.userList);

    const selectionChange = (data: any) => {
      console.log(data);
    };

    return { userList, selectionChange };
  }
});
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
