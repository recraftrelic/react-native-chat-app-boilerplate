import React from 'react';
import { ScrollView } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import ChatDetailHeader from '../../components/Chat/ChatDetailHeader';
import ChatMessage from '../../components/Chat/ChatMessage';
import ChatInput from '../../components/Chat/ChatInput';
import { chatDetail } from './constant';

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
            userImageSource={constants.appLogo}
            userName={chatDetail.userName}
            status={chatDetail.status}
            onBackPress={goToChatList}
            onNextPress={goToProfileDetail}
        />
        <ScrollView>
          {
            chatDetail.messageList.map((data, index) => {
              return <>
                <ChatMessage
                  message={data.messages}
                  timeStamp={data.timeStamp}
                  isRightAlign={data.align}
                />
              </>
            })
          }
        </ScrollView>
        <ChatInput
            placeHolder={constants.messagePlacerHolder}
        />
        </>
    );
}

export default ChatDetails;
