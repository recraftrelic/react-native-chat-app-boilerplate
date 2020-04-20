import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { View, TouchableOpacity, Image, ViewStyle, ImageStyle, ImageSourcePropType, StyleSheet, TextStyle, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../UI/ThemedText';
import SearchBar from '../UI/SearchBar';
import useLanguage from '../../hooks/useLanguage';
import { AppLanguage } from '../../config/languages';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface Props {
  onSettingPress?: (event: GestureResponderEvent) => void;
  appLogoSource: ImageSourcePropType;
  onUserPress?: (event: GestureResponderEvent) => void;
  onGroupPress?: (event: GestureResponderEvent) => void;
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
  const [option,setOption] = useState<Boolean>(false);
  const [fadeAnim] = useState(new Animated.Value(0))

  const firstAnimation = () => {
    setOption(true);
    Animated.spring(
      fadeAnim,
      {
        toValue: 1,
        friction: 5
      }
    ).start();
  }

  const closeAnimation = () => {
    setOption(false);
    Animated.spring(
      fadeAnim,
      {
        toValue: 0,
        friction: 7
      }
    ).start();
  }

  const menu_moveY = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1]
  });

  return (
    <Animated.View style={
      {
        transform: [{ translateY: menu_moveY }]
      }
    }>
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
            {
              option ?
              <TouchableOpacity onPress={() => {closeAnimation()}}>
                <EntypoIcon name="cross" size={20} color={theme.lightTextColor} />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => {firstAnimation()}}>
                <EntypoIcon name="plus" size={20} color={theme.lightTextColor} />
              </TouchableOpacity>
            }
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
      {
        option ?
        <View style={{width: 170, backgroundColor: 'white'}}>
          <TouchableOpacity style={style.topContainer} onPress={onUserPress}>
            <View style={[style.childContainer, style.leftContainer]}>
              <Icon name="ios-contact" size={30} color={theme.textColor} />
            </View>
            <View style={[style.childContainer, style.centerContainer, {flex: 3}]}>
              <ThemedText styleKey="textColor" style={style.content}>{constants.newChat}</ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[style.topContainer,{paddingTop: 0}]} onPress={onGroupPress}>
            <View style={[style.childContainer, style.leftContainer]}>
              <Icon name="ios-contacts" size={30} color={theme.textColor} />
            </View>
            <View style={[style.childContainer, style.centerContainer, {flex: 3}]}>
              <ThemedText styleKey="textColor" style={style.content}>{constants.newGroup}</ThemedText>
            </View>
          </TouchableOpacity>
        </View>
        : null
      }   
    </Animated.View>
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
