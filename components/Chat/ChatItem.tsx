import React from 'react';
import { GestureResponderEvent, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import ChatUserImage from './ChatUserImage';

interface Props {
    userImageSource: ImageSourcePropType;
    userName: string;
    timeStamp: Date;
    lastMessage: string;
    onChatPress?: (event: GestureResponderEvent) => void
};

const ChatItem: React.FunctionComponent<Props> = ({
    lastMessage,
    onChatPress,
    timeStamp,
    userImageSource,
    userName,
}: Props) => {
    return (
        <TouchableOpacity onPress={onChatPress}>
            <View style={style.container}>
                <ChatUserImage
                    source={userImageSource}
                    containerStyle={style.userImageContainer}
                />
                <View style={style.contentContainer}>
                    <View style={style.topContentContainer}>
                        <Text style={style.userNameStyle}>{userName}</Text>
                        <Text>{timeStamp.getDate()}</Text>
                    </View>
                    <View>
                        <Text>{lastMessage}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ChatItem;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    topContentContainer: ViewStyle;
    userImageContainer: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    contentContainer: {
        flex: 17,
        justifyContent: "center",
        paddingLeft: 10
    },
    topContentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userImageContainer: {
        flex: 3
    },
    userNameStyle: {
        fontWeight: "bold"
    }
})
