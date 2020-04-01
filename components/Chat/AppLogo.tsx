import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { View, TouchableOpacity, Image, ViewStyle, ImageStyle, ImageSourcePropType, StyleSheet, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../UI/ThemedText';
import SearchBar from '../UI/SearchBar';
import useLanguage from '../../hooks/useLanguage';
import { AppLanguage } from '../../config/languages';

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
  const [searchBar,setSearchBar] = useState<Boolean>(false);

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
          <ThemedText styleKey="textColor" style={style.title}>{constants.chatTitle}</ThemedText>
        </View>
        <View style={[style.searchContainer, style.rightContainer]}>
          
        <View style={[style.newContainer]}>
          <TouchableOpacity onPress={() => setSearchBar(true)}>
            <Icon name="ios-search" size={20} color={theme.lightTextColor} />
          </TouchableOpacity>
        </View>
        <View style={[style.newContainer, {paddingRight: 0}]}>
          <TouchableOpacity onPress={onSettingPress}>
            <Icon name="md-settings" size={20} color={theme.textColor} />
          </TouchableOpacity>
        </View>
        </View>
      </View>
      {
        searchBar ?
          <SearchBar
            placeHolder={constants.searchPlacerHolder}
          />
        : null
      }     
    </View>
  )
};

export default AppLogo;

interface Style {
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  newContainer: ViewStyle;
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
  newContainer: {
    paddingRight: 15,
  },
  leftContainer: {
    alignItems: "flex-start",
  },
  centerContainer: {
    alignItems: "center",
    flex: 8,
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
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
