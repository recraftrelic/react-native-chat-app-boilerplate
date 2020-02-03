import React from 'react';
import { GestureResponderEvent, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import ChatUserImage from './ChatUserImage';
import NotificationDot from './NotificationDot';
import TimeDuration from './TimeDuration';

interface Props {
    userImageSource: ImageSourcePropType;
    userName: string;
    timeStamp: Date;
    lastMessage: string;
    notificationCount?: number;
    onChatPress?: (event: GestureResponderEvent) => void
};

const ChatItem: React.FunctionComponent<Props> = ({
    notificationCount,
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
                        <TimeDuration
                            date={timeStamp}
                        />
                    </View>
                    <View style={[style.topContentContainer, { alignItems: 'flex-end' }]}>
                        <View style={style.lastMessageContainer}>
                            <Text numberOfLines={1}>{lastMessage}</Text>
                        </View>
                        {
                            notificationCount && (
                                <View style={style.notificationDotContainer}>
                                    <NotificationDot
                                        notificationCount={notificationCount}
                                    />
                                </View>
                            )
                        }
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
    lastMessageContainer: ViewStyle;
    notificationDotContainer: ViewStyle;
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
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    lastMessageContainer: {
        flex: 9,
        paddingTop: 5,
    },
    notificationDotContainer: {
        flex: 1,
        alignItems: "flex-end"
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
