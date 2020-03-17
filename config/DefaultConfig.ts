import { themes, ThemeKey } from "./themes";

export interface AppTheme {
  backgroundColor: string,
  highlightColor: string,
  highlightTextColor: string,
  textColor: string,
  lightTextColor: string,
  lightBottomColor: string,
  alternateMessageBackgroundColor: string,
  modalBackgroundColor: string,
  warningColor: string;
  errorColor: string;
  appColor: string;
}

export interface AppDateFormats {
  chatDateFormat: string,
  chatHourDisplayFormat: string,
  chatYesterdayText: string,
}

export interface AppConstants {
    selectedTheme: ThemeKey,
    dateFormats?: AppDateFormats,
    searchPlacerHolder: string,
    messagePlacerHolder: string,
    namePlaceholder: string,
    usernamePlacerHolder: string,
    emailPlacerHolder: string,
    passwordPlacerHolder: string,
    signupCheck: string;
    loginButton: string;
    signupButton: string;
    chatTitle: string,
    appName: string,
    appLogo: any,
}

export interface ApplicationConfig {
    constants?: AppConstants
}

export const defaultConfig: ApplicationConfig = {
    constants: {
      selectedTheme: ThemeKey.light,
      dateFormats: {
        chatDateFormat: "MM/DD/YY",
        chatHourDisplayFormat: "hh:mm A",
        chatYesterdayText: "Yesterday",
      },
      searchPlacerHolder: "Search Chats",
      messagePlacerHolder: "Type Text here for message...",
      namePlaceholder: "Full Name",
      usernamePlacerHolder: "Username",
      emailPlacerHolder: "Email",
      passwordPlacerHolder: "Password",
      loginButton: "Login",
      signupButton: "Sign up",
      signupCheck: "If you don't have an account",
      chatTitle: "Chats",
      appName: "Recraft Chat App",
      appLogo: require("../app-logo.png")
    }
}
