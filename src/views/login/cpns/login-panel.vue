<template>
  <div class="login-panel">
    <h2>后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号密码登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="消息中心">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机号登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="login">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
// import cache from '@/utiis/cache';

import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';

export default defineComponent({
  name: 'loing-panel',
  components: { LoginAccount, LoginPhone },
  setup() {
    const isKeepPassword = ref(true);
    // const isKeepPassword = reactive(cache.getCache('isKeepPassword')) ?? ref(true);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const login = () => {
      accountRef.value?.loginAccount(isKeepPassword.value);
    };

    return { isKeepPassword, accountRef, login };
  }
});
</script>

<style lang="less" scoped>
.login-panel {
  display: flex;
  align-items: center;
  flex-direction: column;

  .account-control {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
