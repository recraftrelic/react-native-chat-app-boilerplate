export interface AppTheme {
  backgroundColor: string,
  highlightColor: string,
  highlightTextColor: string,
  textColor: string,
}

export interface AppDateFormats {
  chatDateFormat: string,
  chatHourDisplayFormat: string,
  chatYesterdayText: string,
}

export interface AppConstants {
    dateFormats?: AppDateFormats
}

export interface ApplicationConfig {
    theme?: AppTheme,
    constants?: AppConstants
}

export const darkTheme: AppTheme = {
  backgroundColor: "#000000",
  highlightColor: "grey",
  highlightTextColor: "#ffffff",
  textColor: "#fff"
}

export const lightTheme: AppTheme = {
  backgroundColor: "#ffffff",
  highlightColor: "green",
  highlightTextColor: "#ffffff",
  textColor: "#333"
}

export const defaultConfig: ApplicationConfig = {
    theme: darkTheme,
    constants: {
      dateFormats: {
        chatDateFormat: "MM/DD/YY",
        chatHourDisplayFormat: "hh:mm A",
        chatYesterdayText: "Yesterday",
      }
    }
}
