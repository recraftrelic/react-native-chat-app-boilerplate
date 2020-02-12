import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ViewStyle, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AppTheme, lightTheme, darkTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props {
  updateTheme: (theme: AppTheme) => void
}

const ChatTitleBar: React.FunctionComponent<Props> = ({
  updateTheme
}: Props) => {
  const theme: AppTheme = useTheme();
  const [isDarkTheme, toggleDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    updateTheme(isDarkTheme ? darkTheme : lightTheme)
  }, [isDarkTheme]);

  return (
    <View style={style.container}>
      <Switch value={isDarkTheme} onValueChange={toggleDarkTheme} />
      <TouchableOpacity>
        <Icon name="cog" size={20} color={theme.textColor} />
      </TouchableOpacity>
    </View>
  )
};

export default ChatTitleBar;

interface Style {
  container: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  }
});
