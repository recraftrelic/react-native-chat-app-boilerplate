import { ThemeKey } from "./themes";
import { LanguageKey } from "./languages";

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
    selectedLanguage: LanguageKey,
    dateFormats?: AppDateFormats,
    appLogo: any,
}

export interface ApplicationConfig {
    constants?: AppConstants
}

export const defaultConfig: ApplicationConfig = {
    constants: {
      selectedTheme: ThemeKey.light,
      selectedLanguage: LanguageKey.en,
      dateFormats: {
        chatDateFormat: "MM/DD/YY",
        chatHourDisplayFormat: "hh:mm A",
        chatYesterdayText: "Yesterday",
      },
      appLogo: require("../app-logo.png"),
    }
}
