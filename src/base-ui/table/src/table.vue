<template>
  <div class="pra-table">
    <el-table :data="userList" border style="width: 100%">
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
    propList: {
      type: Array,
      required: true
    },
    userList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.pra-table {
}
</style>
