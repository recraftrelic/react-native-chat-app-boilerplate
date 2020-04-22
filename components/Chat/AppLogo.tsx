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
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';

interface Props {
  onSettingPress?: (event: GestureResponderEvent) => void;
  appLogoSource: ImageSourcePropType;
  onUserPress?: any;
  onGroupPress?: any;
};

const AppLogo: React.FunctionComponent<Props> = ({
  onSettingPress,
  appLogoSource,
  onUserPress,
  onGroupPress,
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
          <View style={[style.newContainer]}>
            <Menu>
              <MenuTrigger>
                <EntypoIcon name="plus" size={20} color={theme.lightTextColor} />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption onSelect={onUserPress}>
                  <View style={style.topContainer}>
                    <View style={[style.childContainer, style.leftContainer]}>
                      <Icon name="ios-contact" size={30} color={theme.textColor} />
                    </View>
                    <View style={[style.childContainer, style.centerContainer, {flex: 3}]}>
                      <ThemedText styleKey="textColor" style={style.content}>{constants.newChat}</ThemedText>
                    </View>
                  </View>
                </MenuOption>
                <MenuOption onSelect={onGroupPress}>
                  <View style={[style.topContainer,{paddingTop: 0, paddingBottom: 5}]}>
                    <View style={[style.childContainer, style.leftContainer]}>
                      <Icon name="ios-contacts" size={30} color={theme.textColor} />
                    </View>
                    <View style={[style.childContainer, style.centerContainer, {flex: 3}]}>
                      <ThemedText styleKey="textColor" style={style.content}>{constants.newGroup}</ThemedText>
                    </View>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
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
            closeBar={() => setSearchBar(false)}
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
  content: TextStyle;
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
    alignItems: "flex-start",
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
  content: {
    fontSize: 16,
    fontWeight: "bold"
  },
  image: {
    width: 20,
    height: 20,
  },
});
