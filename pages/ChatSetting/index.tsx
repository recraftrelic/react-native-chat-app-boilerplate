import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import ChatProfileInfo from '../../components/Chat/ChatProfileInfo';
import ThemeSetting from '../../components/Chat/ThemeSetting';
import ChatVersion from '../../components/Chat/ChatVersion';
import { ThemeKey } from '../../config/themes';

interface Props extends RouteComponentProps {
    dispatch: Dispatch
}  

const ChatSetting: React.FunctionComponent<Props> = ({
    dispatch,
    history
}: Props) => {
    const goBack = () => {
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
          status="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          onButtonPress={goBack}
          editInfo={true}
        />
        <ThemeSetting updateTheme={updateTheme} />
        <ChatVersion name="Chat App Version: 2.0.1" />
        </>
    );
}

export default connect(({ dispatch}) => ({ dispatch }))(ChatSetting);
