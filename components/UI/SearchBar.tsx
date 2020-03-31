import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TextInput, StyleSheet, ViewStyle } from "react-native";
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import { isIOS } from "../../utils";
import { useDarkMode } from 'react-native-dark-mode';

interface Props {
  placeHolder: string
}

const SearchBar: React.FunctionComponent<Props> = ({
  placeHolder
}: Props) => {
  const theme: AppTheme = useTheme();
  const mode = useDarkMode();

  return (
    <View style={[style.searchContainer, { borderBottomColor: mode ? 'grey' : theme.lightBottomColor }]}>
      <View style={style.textContainer}>
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={theme.lightTextColor}
          style={{ color: theme.textColor, paddingBottom: isIOS() ? 0 : 7, height: isIOS() ? 15 : 35 }}
        />
      </View>
      <View style={style.iconContainer}>
        <Icon name="ios-search" size={15} color={theme.lightTextColor} />
      </View>
    </View>
  )
}

export default SearchBar;

interface Style {
  searchContainer: ViewStyle;
  iconContainer: ViewStyle;
  textContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  textContainer: {
    flex: 9
  },
  searchContainer: {
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: isIOS() ? 20 : 10,
    paddingBottom: isIOS() ? 10 : 0
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end"
  }
});
