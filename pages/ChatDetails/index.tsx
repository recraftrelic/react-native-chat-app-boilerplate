import React from 'react';
import { ScrollView } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import ChatDetailHeader from '../../components/Chat/ChatDetailHeader';
import ChatDetailBody from '../../components/Chat/ChatDetailBody';

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
          <ChatDetailBody
            userName="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            timeStamp={new Date()}
          />
        </ScrollView>
        </>
    );
}

export default ChatDetails;
