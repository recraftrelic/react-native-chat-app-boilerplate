import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import ChatProfile from '../../components/Chat/ChatProfile';
import ChatProfileInfo from '../../components/Chat/ChatProfileInfo';
import ChatProfileMedia from '../../components/Chat/ChatProfileMedia';
import { AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import { chatProfileConstants } from './constants';

const ChatProfileDetail: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {

    const constants: AppConstants = useConstants();
      
    const goToChatList = () => {
        history.goBack()
    } 

    const { userName, status, profileImage } = chatProfileConstants;

    return (
      <>
        <ChatProfileInfo
          userImageSource={constants.appLogo}
          userName={userName}
          status={status}
          onButtonPress={goToChatList}
        />
        <ChatProfileMedia
          source={{ uri: profileImage }}
        />
        <ChatProfile
          block={constants.blockButton}
          report={constants.reportButton}
          deleteConversation={constants.deleteButton}
        />
      </>
    );
}

export default ChatProfileDetail;
