export interface AppTheme {}

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

export const defaultConfig: ApplicationConfig = {
    constants: {
      dateFormats: {
        chatDateFormat: "MM/DD/YY",
        chatHourDisplayFormat: "hh:mm A",
        chatYesterdayText: "Yesterday",
      }
    }
}
