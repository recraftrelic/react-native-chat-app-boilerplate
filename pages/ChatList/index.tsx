import moment from 'moment';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import ChatItem from '../../components/Chat/ChatItem';
import AppLogo from '../../components/Chat/AppLogo';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import { chatList } from './constants';

interface Props extends RouteComponentProps {
  dispatch: Dispatch
}

const ChatList: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const goToChatDetails = () => {
    history.push('/chat')
  }

  const goToChatSetting = () => {
    history.push('/settings')
  }

  return (
    <>
      <AppLogo appLogoSource={constants.appLogo} onSettingPress={goToChatSetting}/>
      <ScrollView>
        {
          chatList.map((data, indexKey) => {
            let checkUser = data.users.filter(({ isSameUser }) => isSameUser == false);
            return <View key={indexKey}>
              {
                checkUser.map((users, index) => {
                  return <>
                    <ChatItem
                      key={index}
                      userImageSource={{ uri: users.image }}
                      userName={users.name}
                      timeStamp={data.timeStamp}
                      lastMessage={data.lastMessage}
                      onChatPress={goToChatDetails}
                      notificationCount={data.notificationCount}
                    />
                  </>
                })
              }
            </View>
          })
        }
      </ScrollView>
    </>
  );
};

export default connect(({ dispatch}) => ({ dispatch }))(ChatList);
