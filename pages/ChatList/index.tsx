import moment from 'moment';
import React from 'react';
import { ScrollView } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import ChatItem from '../../components/Chat/ChatItem';
import ChatTitleBar from '../../components/Chat/ChatTitleBar';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import { AppTheme } from '../../config/DefaultConfig';

interface Props extends RouteComponentProps {
  dispatch: Dispatch
}

const ChatList: React.FunctionComponent<Props> = ({
  dispatch,
  history
}: Props) => {

  const goToChatDetails = () => {
    history.push('/chat')
  }

  const goToChatSetting = () => {
    history.push('/setting')
  }

  const updateTheme = (theme: AppTheme) => dispatch(setThemeAction(theme))

  return (
    <>
      <ChatTitleBar userImageSource={{ uri: "https://recraftrelic.com/images/Recraft_relic_web_logo_icon.png" }} onSettingPress={goToChatSetting}/>
      <ScrollView>
        <ChatItem
          userImageSource={{ uri: "https://recraftrelic.com/images/Recraft_relic_web_logo_icon.png" }}
          userName="Amenda"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
          onChatPress={goToChatDetails}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Harish"
          timeStamp={moment().subtract(1, 'day').toDate()}
          lastMessage={"Hey there!!!"}
          notificationCount={2}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Manoj"
          timeStamp={new Date()}
          lastMessage={"The JavaScript world is moving fast. The world of frontEnd development (and web development) is moving blazingly fast."}
          notificationCount={2}
          isTyping={true}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Swati"
          timeStamp={new Date('2020/01/30')}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Vikas"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Aman"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Manish"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Love"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Manoj"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Swati"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Vikas"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Aman"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Manoj"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Swati"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Vikas"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Aman"
          timeStamp={new Date()}
          lastMessage={"Hey there!!!"}
        />
      </ScrollView>
    </>
  );
};

export default connect(({ dispatch}) => ({ dispatch }))(ChatList);
