export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realName', label: '真实姓名', minWidth: '80' },
    { prop: 'cellphone', label: '手机号', minWidth: '120' },
    { prop: 'enable', label: '状态', minWidth: '80', slotName: 'status' },
    { prop: 'createAt', label: '创建时间', minWidth: '200', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '200', slotName: 'updateAt' },
    { label: '操作', minWidth: '150', slotName: 'handle' }
  ],
  isShowIndex: true,
  isShowSelection: true,
  title: '用户列表'
};