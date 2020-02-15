import { Platform } from "react-native";

export const isIOS = (): Boolean => Platform.OS == "ios";
