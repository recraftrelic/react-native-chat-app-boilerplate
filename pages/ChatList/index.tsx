import React from 'react';
import { ScrollView } from 'react-native';
import ChatItem from '../../components/Chat/ChatItem';

const ChatList: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <ChatItem
        userImageSource={{ uri: "https://picsum.photos/200" }}
        userName="Amenda"
        timeStamp={new Date()}
        lastMessage={"Hey there!!!"}
      />
      <ChatItem
        userImageSource={{ uri: "https://picsum.photos/200" }}
        userName="Harish"
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
