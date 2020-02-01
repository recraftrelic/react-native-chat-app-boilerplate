import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import ChatList from '../pages/ChatList';

const Router: React.FunctionComponent = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={ChatList} />
    </NativeRouter>
  )
}

export default Router;
