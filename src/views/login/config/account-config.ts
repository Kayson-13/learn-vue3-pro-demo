export const rules = {
  name: [
    {
      required: true,
      message: '请填写用户名',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名是5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请填写密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,}$/,
      message: '密码必须是5位以上的字母或数字',
      trigger: 'blur'
    }
  ]
};
