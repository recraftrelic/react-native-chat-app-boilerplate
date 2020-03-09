import React from 'react';
import { ScrollView } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import ChatDetailHeader from '../../components/Chat/ChatDetailHeader';
import ChatMessage from '../../components/Chat/ChatMessage';
import ChatInput from '../../components/Chat/ChatInput';

const ChatDetails: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
      
    const goToChatList = () => {
        history.push('/chatlist')
    }   
    const goToProfileDetail = () => {
      history.push('/profile')
    } 
    const constants: AppConstants = useConstants(); 

    return (
        <>
        <ChatDetailHeader
            userImageSource={{ uri: "https://picsum.photos/200" }}
            userName="Amenda"
            status="online"
            onBackPress={goToChatList}
            onNextPress={goToProfileDetail}
        />
        <ScrollView>
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
        <ChatInput
            placeHolder={constants.messagePlacerHolder}
        />
        </>
    );
}

export default ChatDetails;
