import React, { useState, useEffect } from 'react';
import { View, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../UI/ThemedText';
import useTheme from '../../hooks/useTheme';
import useConstants from '../../hooks/useConstants';
import RNPickerSelect from 'react-native-picker-select';
import { AppLanguage } from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';

interface Props {
  updateLanguage: (language: string) => void;
};

const ThemeToggle: React.FunctionComponent<Props> = ({
  updateLanguage,
}: Props) => {
  const theme: AppTheme = useTheme();
  const { selectedLanguage }: AppConstants = useConstants();
  const constant: AppLanguage = useLanguage();
  const [language, setLanguage] = useState<string>(selectedLanguage);

  const languages = [
    { label: 'English', value: 'English' },
    { label: 'French', value: 'French' },
    { label: 'Spanish', value: 'Spanish' },
    { label: 'German', value: 'German' },
    { label: 'Chinese', value: 'Chinese' },
  ];

  useEffect(() => {
    updateLanguage(language)
  }, []);

  const onChangeLanguage = (value) => {
    updateLanguage(value)
    setLanguage(value)
  }

  return (
    <View>
      <View style={[style.container, {borderWidth: 0}]}>
        <View style={style.leftContainer}>
          <ThemedText styleKey="textColor">{constant.defaultLanguage}</ThemedText>
        </View>
        <View style={style.rightContainer}>
          <RNPickerSelect value={language} onValueChange={(value) => onChangeLanguage(value)} items={languages} useNativeAndroidPickerStyle={false}/>
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
