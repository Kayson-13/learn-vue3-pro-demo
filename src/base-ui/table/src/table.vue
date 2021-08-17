<template>
  <div class="pra-table">
    <el-table :data="userList" border style="width: 100%" @selection-change="selectionChange">
      <el-table-column
        type="selection"
        v-if="isShowSelection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        type="index"
        v-if="isShowIndex"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PraTable',
  props: {
    isShowIndex: {
      type: Boolean,
      default: false
    },
    isShowSelection: {
      type: Boolean,
      default: false
    },
    propList: {
      type: Array,
      required: true
    },
    userList: {
      type: Array,
      required: true
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    const selectionChange = (data: any) => {
      emit('selectionChange', data);
    };

    return { selectionChange };
  }
});
</script>

<style scoped lang="less">
.pra-table {
}
</style>
