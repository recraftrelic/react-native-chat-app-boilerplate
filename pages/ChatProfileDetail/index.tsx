import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import ChatProfile from '../../components/Chat/ChatProfile';
import ChatProfileInfo from '../../components/Chat/ChatProfileInfo';
import ChatProfileMedia from '../../components/Chat/ChatProfileMedia';

const ChatProfileDetail: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
      
    const goToChatList = () => {
        history.push('/chat')
    } 

    return (
        <>
        <ChatProfileInfo
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Manoj Singh Negi"
          status="All is Well"
          onButtonPress={goToChatList}
        />
        <ChatProfileMedia
          source={{ uri: "https://picsum.photos/200" }}
        />
        <ChatProfile
          label="Back"
          onButtonPress={goToChatList}
        />
        </>
    );
}

export default ChatProfileDetail;
