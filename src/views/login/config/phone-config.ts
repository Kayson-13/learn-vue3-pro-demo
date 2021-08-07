export const rules = {
  number: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^0-9{13}$/,
      message: '请输入合法手机号',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^0-9{6}$/,
      message: '验证码不正确',
      trigger: 'blur'
    }
  ]
};
