import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { View, TouchableOpacity, Image, ViewStyle, ImageStyle, ImageSourcePropType, StyleSheet, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../UI/ThemedText';
import SearchBar from '../UI/SearchBar';
import useLanguage from '../../hooks/useLanguage';
import { AppLanguage } from '../../config/languages';
import { useDarkMode } from 'react-native-dark-mode';

interface Props {
  onSettingPress?: (event: GestureResponderEvent) => void;
  appLogoSource: ImageSourcePropType;
};

const AppLogo: React.FunctionComponent<Props> = ({
  onSettingPress,
  appLogoSource,
}: Props) => {
  const theme: AppTheme = useTheme();
  const constants: AppLanguage = useLanguage();
  const mode = useDarkMode();

  return (
    <View>
      <View style={style.topContainer}>
        <View style={[style.childContainer, style.leftContainer]}>
          <Image
            style={style.image}
            source={appLogoSource}
          />
        </View>
        <View style={[style.childContainer, style.centerContainer]}>
          <ThemedText styleKey="textColor" style={[style.title, {color : mode ? theme.lightTextColor : theme.textColor}]}>{constants.chatTitle}</ThemedText>
        </View>
        <View style={[style.childContainer, style.rightContainer]}>
          <TouchableOpacity onPress={onSettingPress}>
            <Icon name="md-settings" size={20} color={mode ? theme.lightTextColor : theme.textColor} />
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar
        placeHolder={constants.searchPlacerHolder}
      />
    </View>
  )
};

export default AppLogo;

interface Style {
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  rightContainer: ViewStyle;
  searchContainer: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
  topContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  childContainer: {
    flex: 1,
    justifyContent: "center",
  },
  leftContainer: {
    alignItems: "flex-start",
  },
  centerContainer: {
    alignItems: "center",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  searchContainer: {
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  image: {
    width: 20,
    height: 20,
  },
});
