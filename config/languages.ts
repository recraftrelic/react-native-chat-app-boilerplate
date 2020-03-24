import { AppConstants } from "./DefaultConfig";
import { ThemeKey } from "./themes";

export enum LanguageKey {
    english = "English",
    french = "French",
    spanish = "Spanish",
    german = "German",
    chinese = "Chinese"
}

export interface LanguagesMap {
    [key: string]: AppConstants;
}

export const english: AppConstants = {
    selectedTheme: ThemeKey.light,
    selectedLanguage: LanguageKey.english,
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
      appLogo: require("../app-logo.png"),
      blockButton: "Block",
      reportButton: "Report",
      deleteButton: "Delete Conversation",
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
  
export const french: AppConstants = {
    selectedTheme: ThemeKey.light,
    selectedLanguage: LanguageKey.french,
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
      appLogo: require("../app-logo.png"),
      blockButton: "Bloquer",
      reportButton: "rapport",
      deleteButton: "Supprimer la conversation",
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

export const spanish: AppConstants = {
    selectedTheme: ThemeKey.light,
    selectedLanguage: LanguageKey.spanish,
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
      appLogo: require("../app-logo.png"),
      blockButton: "Block",
      reportButton: "Report",
      deleteButton: "Delete Conversation",
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
  
export const german: AppConstants = {
    selectedTheme: ThemeKey.light,
    selectedLanguage: LanguageKey.german,
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
      appLogo: require("../app-logo.png"),
      blockButton: "Block",
      reportButton: "Report",
      deleteButton: "Delete Conversation",
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

export const chinese: AppConstants = {
    selectedTheme: ThemeKey.light,
    selectedLanguage: LanguageKey.chinese,
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
      appLogo: require("../app-logo.png"),
      blockButton: "Block",
      reportButton: "Report",
      deleteButton: "Delete Conversation",
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
