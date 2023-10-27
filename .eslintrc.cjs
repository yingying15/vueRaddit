/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  //配置忽略文件名不是小写字母 用短杆连接的问题
  rules:{
    'vue/multi-word-component-names': 0
  }
}
