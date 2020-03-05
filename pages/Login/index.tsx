import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import LoginScreen from '../../components/Chat/LoginScreen';

const Login: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
      
    const goToChatList = () => {
        history.push('/login')
    } 

    return (
        <>
        <LoginScreen
          userImageSource={{ uri: "https://recraftrelic.com/images/Recraft_relic_web_logo_icon.png" }}
          name="Recraft Chat App"
          username="Username"
          password="Password"
          login="Login"
          createAccount="If you don't have account "
          onButtonPress={goToChatList}
        />
        </>
    );
}

export default Login;
