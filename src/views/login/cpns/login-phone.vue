<template>
  <div class="login-phone">
    <el-form :model="phone" status-icon :rules="rules" label-width="70px">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="get-code">
          <el-input v-model="phone.verifyCode" autocomplete="off"></el-input>
          <el-button type="primary" class="btn-get-code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import { rules } from '../config/phone-config';

export default defineComponent({
  name: 'login-phone',
  setup() {
    const phone = reactive({
      number: '',
      verifyCoede: ''
    });

    return { phone, rules };
  }
});
</script>

<style lang="less" scoped>
.login-phone {
  .get-code {
    display: flex;

    .btn-get-code {
      margin-left: 10px;
    }
  }
}
</style>
