<template>
  <div class="pra-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="header">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>
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
    <div class="footer">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PraTable',
  props: {
    title: {
      type: String,
      default: ''
    },
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
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  .footer {
    margin-top: 5px;
    text-align: right;
  }
}
</style>
