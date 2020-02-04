import React from 'react';
import { ScrollView } from 'react-native';
import ChatItem from '../../components/Chat/ChatItem';
import moment from 'moment';

const ChatList: React.FunctionComponent = () => {
  return (
    <ScrollView>
      <ChatItem
        userImageSource={{ uri: "https://picsum.photos/200" }}
        userName="Amenda"
        timeStamp={new Date()}
        lastMessage={"Hey there!!!"}
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
  );
};

export default ChatList;
