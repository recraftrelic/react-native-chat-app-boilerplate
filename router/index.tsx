import React from 'react';
import { SafeAreaView, ViewStyle, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import BackHandlerHOC from '../components/HOC/BackHandlerHOC';
import ChatList from '../pages/ChatList';
import ChatDetails from '../pages/ChatDetails';
import { AppTheme } from '../config/DefaultConfig';
import useTheme from '../hooks/useTheme';

const Router: React.FunctionComponent = () => {
  const theme: AppTheme = useTheme();

  return (
    <SafeAreaView style={[style.container, { backgroundColor: theme.backgroundColor}]}>
      <NativeRouter>
        <BackHandlerHOC>
          <Switch>
            <Route exact path="/" component={ChatList} />
            <Route exact path="/chat/" component={ChatDetails} />
          </Switch>
        </BackHandlerHOC>
      </NativeRouter>
    </SafeAreaView>
  )
}

export default Router;

interface Style {
  container: ViewStyle
}

const style: Style = StyleSheet.create<Style>({
  container: {
      flex: 1
  }
})

