import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ViewStyle, StyleSheet, Switch, TextStyle } from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../UI/ThemedText';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useConstants from '../../hooks/useConstants';
import { ThemeKey } from '../../config/themes';

interface Props {
  updateTheme: (theme: ThemeKey) => void;
  changeTheme: string;
  logout: string;
};

const ChatSettingTheme: React.FunctionComponent<Props> = ({
  updateTheme,
  changeTheme,
  logout,
}: Props) => {
  const theme: AppTheme = useTheme();
  const { selectedTheme }: AppConstants = useConstants();
  const [isDarkTheme, toggleDarkTheme] = useState<boolean>(selectedTheme == ThemeKey.dark);

  useEffect(() => {
    const newSelectedTheme = isDarkTheme ? ThemeKey.dark : ThemeKey.light

    updateTheme(newSelectedTheme)
  }, [isDarkTheme]);

  return (
    <View>
      <View style={[style.container, {borderColor: theme.lightBottomColor}]}>
        <View style={style.leftContainer}>
          <ThemedText styleKey="textColor">{changeTheme}</ThemedText>
        </View>
        <View style={style.rightContainer}>
          <Switch trackColor={{
            false: theme.lightTextColor,
            true: theme.lightTextColor
          }} thumbColor={theme.textColor} value={isDarkTheme} onValueChange={toggleDarkTheme} />
        </View>
      </View>
      <TouchableOpacity>
        <View style={[style.container, {borderColor: theme.lightBottomColor}]}>
          <View style={style.leftContainer}>
            <ThemedText styleKey="textColor">{logout}</ThemedText>
          </View>
          <View style={style.rightContainer}>
            <MaterialIcon name="logout" size={30} color={theme.warningColor} />   
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
};

export default ChatSettingTheme;

interface Style {
  container: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  title: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
    },  
  leftContainer: {
    alignItems: "flex-start",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
