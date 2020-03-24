export enum LanguageKey {
  en = "en",
  fr = "fr",
  sp = "sp",
  gr = "gr",
  ch = "ch"
}

export interface AppLanguage {
  searchPlacerHolder: string,
  messagePlacerHolder: string,
  namePlaceholder: string,
  usernamePlacerHolder: string,
  emailPlacerHolder: string,
  passwordPlacerHolder: string,
  signupCheck: string;
  loginButton: string;
  logoutButton: string;
  signupButton: string;
  chatTitle: string,
  appName: string,
  blockButton: string,
  reportButton: string,
  deleteButton: string,
  defaultLanguage: string,
  defaultTheme: string,
  loginValidation: loginValidation,
  signupValidation: signupValidation,
}

export interface LanguagesMap {
  [key: string]: AppLanguage;
}

export interface loginValidation {
  username: string,
  password: string,
  passwordLength: string,
}

export interface signupValidation {
  name: string,
  username: string,
  email: string,
  validEmail: string,
  password: string,
  passwordLength: string,
}

export const en: AppLanguage = {
  searchPlacerHolder: "Search Chats",
  messagePlacerHolder: "Type Text here for message...",
  namePlaceholder: "Full Name",
  usernamePlacerHolder: "Username",
  emailPlacerHolder: "Email",
  passwordPlacerHolder: "Password",
  loginButton: "Login",
  logoutButton: "Logout",
  signupButton: "Sign up",
  signupCheck: "If you don't have an account",
  chatTitle: "Chats",
  appName: "Recraft Chat App",
  blockButton: "Block",
  reportButton: "Report",
  deleteButton: "Delete Conversation",
  defaultLanguage: "Default Language",
  defaultTheme: "Dark Theme",
  loginValidation : {
    username: `Username is required`,
    password: `Password is required`,
    passwordLength: 'Password length between 6 and 12',
  },
  signupValidation : {
    name: `Full Name is required`,
    username: `Username is required`,
    email: `Email is required`,
    validEmail: 'Please enter a valid email',
    password: `Password is required`,
    passwordLength: 'Password length between 6 and 12',
  },
}
  
export const fr: AppLanguage = {
  searchPlacerHolder: "Rechercher des chats",
  messagePlacerHolder: "Tapez le texte ici pour le message...",
  namePlaceholder: "Nom complet",
  usernamePlacerHolder: "Nom d'utilisateur",
  emailPlacerHolder: "Email",
  passwordPlacerHolder: "Mot de passe",
  loginButton: "S'identifier",
  logoutButton: "Se déconnecter",
  signupButton: "S'inscrire",
  signupCheck: "Si vous n'avez pas de compte",
  chatTitle: "Chattes",
  appName: "Recraft Chat App",
  blockButton: "Bloquer",
  reportButton: "rapport",
  deleteButton: "Supprimer la conversation",
  defaultLanguage: "Idioma predeterminado",
  defaultTheme: "Tema oscuro",
  loginValidation : {
    username: `Nom d'utilisateur est nécessaire`,
    password: `Mot de passe requis`,
    passwordLength: 'Longueur du mot de passe entre 6 et 12',
  },
  signupValidation : {
    name: `Full Name is required`,
    username: `Nom d'utilisateur est nécessaire`,
    email: `L'email est requis`,
    validEmail: 'Veuillez saisir un e-mail valide',
    password: `Mot de passe requis`,
    passwordLength: 'Longueur du mot de passe entre 6 et 12',
  },
}

export const sp: AppLanguage = {
  searchPlacerHolder: "Chats de búsqueda",
  messagePlacerHolder: "Escriba Texto aquí para el mensaje ...",
  namePlaceholder: "Nombre completo",
  usernamePlacerHolder: "Nombre de usuario",
  emailPlacerHolder: "Email",
  passwordPlacerHolder: "Contraseña",
  loginButton: "Iniciar sesión",
  logoutButton: "Cerrar sesión",
  signupButton: "Regístrate",
  signupCheck: "Si no tienes una cuenta",
  chatTitle: "Chats",
  appName: "Recraft Chat App",
  blockButton: "Bloquear",
  reportButton: "Reporte",
  deleteButton: "Eliminar la conversación",
  defaultLanguage: "Idioma predeterminado",
  defaultTheme: "Tema oscuro",
  loginValidation : {
    username: `Se requiere nombre de usuario`,
    password: `se requiere contraseña`,
    passwordLength: 'Longitud de contraseña entre 6 y 12',
  },
  signupValidation : {
    name: `Nombre completo es requerido`,
    username: `Se requiere nombre de usuario`,
    email: `Correo electronico es requerido`,
    validEmail: 'Por favor introduzca una dirección de correo electrónico válida',
    password: `se requiere contraseña`,
    passwordLength: 'Longitud de contraseña entre 6 y 12',
  },
}
  
export const gr: AppLanguage = {
  searchPlacerHolder: "Chats suchen",
  messagePlacerHolder: "Geben Sie hier Text für Nachricht ein ...",
  namePlaceholder: "Vollständiger Name",
  usernamePlacerHolder: "Nutzername",
  emailPlacerHolder: "Email",
  passwordPlacerHolder: "Passwort",
  loginButton: "Einloggen",
  logoutButton: "Ausloggen",
  signupButton: "Anmelden",
  signupCheck: "Wenn Sie kein Konto haben",
  chatTitle: "Chats",
  appName: "Recraft Chat App",
  blockButton: "Block",
  reportButton: "Bericht",
  deleteButton: "Konversation löschen",
  defaultLanguage: "Standardsprache",
  defaultTheme: "Dunkles Thema",
  loginValidation : {
    username: `Ein Benutzername ist erforderlich`,
    password: `Passwort wird benötigt`,
    passwordLength: 'Passwortlänge zwischen 6 und 12',
  },
  signupValidation : {
    name: `Der vollständige Name ist erforderlich`,
    username: `Ein Benutzername ist erforderlich`,
    email: `E-Mail ist erforderlich`,
    validEmail: 'Bitte geben Sie eine gültige Email-Adresse ein',
    password: `Passwort wird benötigt`,
    passwordLength: 'Passwortlänge zwischen 6 und 12',
  },
}

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

export const languages: LanguagesMap = {
  [LanguageKey.en]: en,
  [LanguageKey.fr]: fr,
  [LanguageKey.sp]: sp,
  [LanguageKey.gr]: gr,
  [LanguageKey.ch]: ch,
}
