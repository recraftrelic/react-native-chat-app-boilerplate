import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface Props {
    lastMessage: string;
    isTyping?: boolean;
};

const LastMessage: React.FunctionComponent<Props> = ({
    isTyping,
    lastMessage,
}: Props) => {

    if (isTyping) {
        return <Text style={style.typingText}>typing...</Text>
    }

    return <Text numberOfLines={1}>{lastMessage}</Text>
}

export default LastMessage;

interface Style {
    typingText: TextStyle
}

const style: Style = StyleSheet.create<Style>({
    typingText: {
        color: "green",
        fontWeight: "bold"
    }
})
