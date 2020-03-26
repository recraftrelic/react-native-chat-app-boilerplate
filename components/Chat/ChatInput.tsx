//todo need to refactor
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { View, TextInput, TouchableOpacity, StyleSheet, ViewStyle, KeyboardAvoidingViewProps, Animated } from "react-native";
import {KeyboardAvoidingView} from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import { isIOS } from "../../utils";

let keyboardAvoidingViewProps: KeyboardAvoidingViewProps = {}

if (isIOS()) {
    keyboardAvoidingViewProps.behavior = "padding"
}

interface Props {
  placeHolder: string
}

const ChatInput: React.FunctionComponent<Props> = ({
  placeHolder
}: Props) => {
  const theme: AppTheme = useTheme();
  const [addItem, setItem] = useState<boolean>(false);
  const [animate, setAnimate] = useState<Number>(0);
  const [fadeAnim] = useState(new Animated.Value(0))

  const firstAnimation = () => {
    setItem(true);
    setAnimate(1);
    Animated.spring(
      fadeAnim,
      {
        toValue: 1,
        friction: 5
      }
    ).start();
  }

  const closeAnimation = () => {
    setItem(false);
    setAnimate(1);
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
    outputRange: [0, -30]
  });

  return (
    <KeyboardAvoidingView {...keyboardAvoidingViewProps} enabled>
      <Animated.View style={
        {
          backgroundColor: theme.backgroundColor,
          transform: [{ translateY: menu_moveY }]
        }
      }>
        <View style={[style.searchContainer, { borderBottomColor: theme.lightBottomColor }]}>
          { addItem ?
            <TouchableOpacity onPress={() => {closeAnimation()}}>
              <MaterialIcon name="plus-circle-outline" size={40} color={theme.lightTextColor} style={[style.addButton, {transform: [{ rotate: '45deg' }]}]}/>
            </TouchableOpacity> 
            :
            <TouchableOpacity onPress={() => {firstAnimation()}}>
              <MaterialIcon name="plus-circle-outline" size={40} color={theme.lightTextColor} style={style.addButton}/>
            </TouchableOpacity> 
          } 
          <View style={style.textContainer}>
            <TextInput
              placeholder={placeHolder}
              placeholderTextColor={theme.lightTextColor}
              style={{ color: theme.textColor }}
            />
          </View>
          <View style={style.iconContainer}>
            <TouchableOpacity>
              <Icon name="md-send" size={35} color={theme.lightTextColor} />
            </TouchableOpacity>  
          </View>
        </View>
        { addItem ?
          <View style={[style.searchContainer, { borderBottomWidth: 0 }]}>
            <TouchableOpacity>
              <Icon name="md-document" size={35} color={theme.lightTextColor} style={style.addIcons} />
            </TouchableOpacity> 
            <TouchableOpacity>
              <Icon name="ios-camera" size={35} color={theme.lightTextColor} style={style.addIcons} />
            </TouchableOpacity> 
            <TouchableOpacity>
              <Icon name="md-photos" size={35} color={theme.lightTextColor} style={style.addIcons} />
            </TouchableOpacity> 
            <TouchableOpacity>
              <EntypoIcon name="location-pin" size={35} color={theme.lightTextColor} style={style.addIcons} />
            </TouchableOpacity> 
            <TouchableOpacity>
              <MaterialIcon name="music-circle" size={35} color={theme.lightTextColor} style={style.addIcons} />
            </TouchableOpacity> 
            <TouchableOpacity>
              <Icon name="md-contact" size={35} color={theme.lightTextColor} style={style.addIcons} />
            </TouchableOpacity> 
          </View>
          :null
        }
      </Animated.View>
    </KeyboardAvoidingView>
  )
}

export default ChatInput;

interface Style {
  searchContainer: ViewStyle;
  iconContainer: ViewStyle;
  textContainer: ViewStyle;
  addButton: ViewStyle;
  addIcons: ViewStyle;
  footer_menu: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  textContainer: {
    flex: 9
  },
  searchContainer: {
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  addButton: {
    paddingTop: isIOS() ? 5 : 0,
    paddingRight: isIOS() ? 5 : 0
  },
  addIcons: {
    paddingLeft: 29,
  },
  footer_menu: {
  },
});
