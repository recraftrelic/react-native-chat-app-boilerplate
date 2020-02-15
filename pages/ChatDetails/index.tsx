import React from 'react';
import { ScrollView } from 'react-native';
import ChatItem from '../../components/Chat/ChatItem';
import { Text } from 'react-native';

interface Props {};

const ChatDetails: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <>
        <ScrollView>
          <Text>Back</Text>
          <ChatItem
            userImageSource={{ uri: "https://picsum.photos/200" }}
            userName="Amenda"
            timeStamp={new Date()}
            lastMessage={"Online"}
          />
        </ScrollView>
        </>
    );
}

export default ChatDetails;
