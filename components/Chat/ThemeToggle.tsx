import React, { useState, useEffect } from 'react';
import { View, ViewStyle, StyleSheet, Switch, TextStyle } from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import { ThemeKey } from '../../config/themes';
import useLanguage from '../../hooks/useLanguage';
import { AppLanguage } from '../../config/languages';

interface Props {
  updateTheme: (theme: ThemeKey) => void;
};

const ThemeToggle: React.FunctionComponent<Props> = ({
  updateTheme,
}: Props) => {
  const theme: AppTheme = useTheme();
  const { selectedTheme }: AppConstants = useConstants();
  const language: AppLanguage = useLanguage();
  const [isDarkTheme, toggleDarkTheme] = useState<boolean>(selectedTheme == ThemeKey.dark);

  useEffect(() => {
    const newSelectedTheme = isDarkTheme ? ThemeKey.dark : ThemeKey.light

    updateTheme(newSelectedTheme)
  }, [isDarkTheme]);

  return (
    <View>
      <View style={[style.container, {borderColor: theme.lightBottomColor}]}>
        <View style={style.leftContainer}>
          <ThemedText styleKey="textColor">{language.defaultTheme}</ThemedText>
        </View>
        <View style={style.rightContainer}>
          <Switch trackColor={{
            false: theme.lightTextColor,
            true: theme.lightTextColor
          }} thumbColor={theme.textColor} value={isDarkTheme} onValueChange={toggleDarkTheme} />
        </View>
      </View>
    </View>
  )
};

export default ThemeToggle;

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
