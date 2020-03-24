import { AppLanguage } from '../languages'

export const ch: AppLanguage = {
  searchPlacerHolder: "搜索聊天",
  messagePlacerHolder: "在此处输入文字以获取消息...",
  namePlaceholder: "全名",
  usernamePlacerHolder: "用户名",
  emailPlacerHolder: "电子邮件",
  passwordPlacerHolder: "密码",
  loginButton: "登录",
  logoutButton: "登出",
  signupButton: "注册",
  signupCheck: "如果您没有帐户",
  chatTitle: "聊天室",
  appName: "改造聊天应用",
  blockButton: "块",
  reportButton: "报告",
  deleteButton: "删除对话",
  defaultLanguage: "预设语言",
  defaultTheme: "黑暗主题",
  loginValidation : {
    username: `用户名为必填项`,
    password: `密码是必需的`,
    passwordLength: '密码长度在6到12之间',
  },
  signupValidation : {
    name: `需要全名`,
    username: `用户名为必填项`,
    email: `电子邮件为必填项`,
    validEmail: '请输入有效电子邮件',
    password: `密码是必需的`,
    passwordLength: '密码长度在6到12之间',
  },
}
