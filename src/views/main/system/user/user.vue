<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <pra-table
        :propList="propList"
        :userList="userList"
        :isShowIndex="isShowIndex"
        :isShowSelection="isShowSelection"
        @selectionChange="selectionChange"
      >
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from '@/store';
import PageSearch from 'components/page-search/src/page-search.vue';
import PraTable from '@/base-ui/table/src/table.vue';

import { searchFormConfig } from './config/search.config';

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PraTable
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

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realName', label: '真实姓名', minWidth: '80' },
      { prop: 'cellphone', label: '手机号', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      { prop: 'createAt', label: '创建时间', minWidth: '200', slotName: 'createAt' },
      { prop: 'updateAt', label: '更新时间', minWidth: '200', slotName: 'updateAt' },
      { label: '操作', minWidth: '150', slotName: 'handle' }
    ];

    const userList = computed(() => store.state.system.userList);

    const isShowIndex = true;
    const isShowSelection = true;

    const selectionChange = (data: any) => {
      console.log(data);
    };

    return {
      searchFormConfig,
      propList,
      userList,
      isShowIndex,
      isShowSelection,
      selectionChange
    };
  }
});
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
