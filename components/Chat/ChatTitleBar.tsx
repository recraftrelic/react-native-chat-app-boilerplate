import React from 'react';
import { View, TouchableOpacity, ViewStyle, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props {}

const ChatTitleBar: React.FunctionComponent<Props> = (props: Props) => {
  const theme: AppTheme = useTheme();

  return (
    <View style={style.container}>
      <Switch value={false} />
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
