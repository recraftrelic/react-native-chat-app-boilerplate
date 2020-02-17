import React from 'react';
import { ScrollView } from 'react-native';
import ChatDetailHeader from '../../components/Chat/ChatShow';
import { RouteComponentProps } from 'react-router-native';

const ChatDetails: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
      
    const goToChatList = () => {
        history.push('/')
    }    

    return (
        <>
        <ScrollView>
          <ChatDetailHeader
            userImageSource={{ uri: "https://picsum.photos/200" }}
            userName="Amenda"
            status="online"
            onBackPress={goToChatList}
          />
        </ScrollView>
        </>
    );
}

export default ChatDetails;
