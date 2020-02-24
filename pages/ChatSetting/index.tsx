import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import ChatProfileInfo from '../../components/Chat/ChatProfileInfo';
import ChatSettingTheme from '../../components/Chat/ChatSettingTheme';
import ChatVersion from '../../components/Chat/ChatVersion';
import { ThemeKey } from '../../config/themes';

interface Props extends RouteComponentProps {
    dispatch: Dispatch
  }  

const ChatSetting: React.FunctionComponent<Props> = ({
    dispatch,
    history
}: Props) => {
      
    const goToChatList = () => {
        history.goBack()
    } 

    const updateTheme = (theme: ThemeKey) => {
        dispatch(setThemeAction(theme))
    }

    return (
        <>
        <ChatProfileInfo
          userImageSource={{ uri: "https://recraftrelic.com/images/Recraft_relic_web_logo_icon.png" }}
          userName="Manoj Singh Negi"
          status="I didn't change, I just grew up. You should try it once. God is really creative , I mean ..just look at me. I didn't change, I just grew up. You should try it once. God is really creative , I mean ..just look at me."
          onButtonPress={goToChatList}
          editInfo={true}
        />
        <ChatSettingTheme updateTheme={updateTheme} changeTheme="Dark Theme" logout="Logout" />
        <ChatVersion name="Chat App Version: 2.0.1" />
        </>
    );
}

export default connect(({ dispatch}) => ({ dispatch }))(ChatSetting);
