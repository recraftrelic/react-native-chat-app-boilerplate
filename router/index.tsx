import React from 'react';
import { NativeRouter, Route, Switch } from "react-router-native";
import BackHandlerHOC from '../components/HOC/BackHandlerHOC';
import ChatList from '../pages/ChatList';
import ChatDetails from '../pages/ChatDetails';

const Router: React.FunctionComponent = () => {
  return (
    <NativeRouter>
      <BackHandlerHOC>
        <Switch>
          <Route exact path="/" component={ChatList} />
          <Route exact path="/chat/" component={ChatDetails} />
        </Switch>
      </BackHandlerHOC>
    </NativeRouter>
  )
}

export default Router;
