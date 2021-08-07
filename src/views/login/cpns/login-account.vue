<template>
  <div class="login-account">
    <el-form :model="account" status-icon :rules="rules" label-width="70px" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input type="text" v-model="account.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="account.password"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import type { ElForm } from 'element-plus';

import cache from '@/utiis/cache';
import { rules } from '../config/account-config';

export default defineComponent({
  name: 'login-account',
  setup() {
    const store = useStore();
    const account = reactive({
      name: cache.getCache('name') ?? '',
      password: cache.getCache('password') ?? ''
    });

    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAccount = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            // 选中【记住密码】,将登陆信息保存到 LocalStorage 中
            // 无论登陆验证是否正确，都保存在 LocalStorage 中
            // 每一次点击登陆，都会更新一次
            cache.setCache('name', account.name);
            cache.setCache('password', account.password);
            cache.setCache('isKeepPassword', isKeepPassword);
          } else {
            // 未选中【记住密码】，将 LocalStorage 中的登录信息删除
            cache.deleteCache('name');
            cache.deleteCache('password');
            cache.deleteCache('isKeepPassword');
          }

          // 开始验证登录
          store.dispatch('login/verifyAccount', { ...account });
        }
      });
    };

    return { account, rules, loginAccount, formRef };
  }
});
</script>

<style lang="less" scoped></style>
