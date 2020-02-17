import React from 'react';
import { ScrollView } from 'react-native';
import ChatShow from '../../components/Chat/ChatShow';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';

interface Props extends RouteComponentProps {
    dispatch: Dispatch
}

const ChatDetails: React.FunctionComponent<Props> = ({
    history
}: Props) => {
      
    const goToChatList = () => {
        history.push('/')
    }    

    return (
        <>
        <ScrollView>
          <ChatShow
            userImageSource={{ uri: "https://picsum.photos/200" }}
            userName="Amenda"
            status="online"
            onChatPress={goToChatList}
          />
        </ScrollView>
        </>
    );
}

export default ChatDetails;
