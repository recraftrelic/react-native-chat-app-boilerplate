import React from 'react';
import { ViewProps, SafeAreaView, StyleProp, ViewStyle, StatusBar } from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import useConstants from '../../hooks/useConstants';

interface Props extends ViewProps {
  children: React.ReactChild
}

const ThemedView: React.FunctionComponent<Props> = (props: Props) => {
  const theme: AppTheme = useTheme();

  const { children, style, ...restProps } = props;

  const { selectedTheme }: AppConstants = useConstants();

  const selectedStatusBar = selectedTheme ? "dark-content" : "light-content"

  const themeColorStyle: StyleProp<ViewStyle> = [{backgroundColor: theme.backgroundColor}];

  const newStyle: StyleProp<ViewStyle> = themeColorStyle.concat(style)

  return (
    <SafeAreaView style={newStyle} {...restProps}>
      <StatusBar barStyle={selectedStatusBar} />
      {props.children}
    </SafeAreaView>
  )
};

export default ThemedView;