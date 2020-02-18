import React from 'react';
import { ScrollView } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import ChatDetailHeader from '../../components/Chat/ChatDetailHeader';
import ChatMessage from '../../components/Chat/ChatMessage';

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
          <ChatMessage
            message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            timeStamp={new Date()}
            isRightAlign={true}
          />
          <ChatMessage
            message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            timeStamp={new Date()}
            isRightAlign={false}
          />
          <ChatMessage
            message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            timeStamp={new Date()}
            isRightAlign={true}
          />
        </ScrollView>
        </>
    );
}

export default ChatDetails;
