import React from 'react';
import { ScrollView } from 'react-native';
import ChatShow from '../../components/Chat/ChatShow';

interface Props {};

const ChatDetails: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <>
        <ScrollView>
          <ChatShow
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
