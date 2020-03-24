export enum LanguageKey {
  english = "English",
  french = "French",
  spanish = "Spanish",
  german = "German",
  chinese = "Chinese"
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

export const english: AppLanguage = {
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
  
export const french: AppLanguage = {
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

export const spanish: AppLanguage = {
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
  
export const german: AppLanguage = {
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

export const chinese: AppLanguage = {
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

export const languages: LanguagesMap = {
  [LanguageKey.english]: english,
  [LanguageKey.french]: french,
  [LanguageKey.spanish]: spanish,
  [LanguageKey.german]: german,
  [LanguageKey.chinese]: chinese,
}
