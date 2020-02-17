import React from 'react';
import { GestureResponderEvent, ImageSourcePropType, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import ChatUserImage from './ChatUserImage';
import LastMessage from './LastMessage';
import NotificationDot from './NotificationDot';
import TimeDuration from './TimeDuration';
import ThemedText from '../UI/ThemedText';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    userImageSource: ImageSourcePropType;
    userName: string;
    timeStamp: Date;
    lastMessage: string;
    notificationCount?: number;
    isTyping?: boolean;
    onChatPress?: (event: GestureResponderEvent) => void
};

const ChatShow: React.FunctionComponent<Props> = ({
    isTyping,
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
                <Icon name="ios-arrow-back" size={40} color="white" style={style.contentIcons}/>
                <ChatUserImage
                    source={userImageSource}
                    containerStyle={style.userImageContainer}
                />
                <View style={style.contentContainer}>
                    <View style={style.topContentContainer}>
                        <ThemedText styleKey="textColor" style={style.userNameStyle}>{userName}</ThemedText>
                        <MaterialIcon name="dots-vertical" size={20} color="white" style={style.contentMaterialIcons} />
                    </View>
                    <View style={[style.topContentContainer, { alignItems: 'flex-end' }]}>
                        <View style={style.lastMessageContainer}>
                            <LastMessage 
                                lastMessage={lastMessage}
                                isTyping={isTyping}
                            />
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

export default ChatShow;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    contentIcons: ViewStyle;
    contentMaterialIcons: ViewStyle;
    lastMessageContainer: ViewStyle;
    notificationDotContainer: ViewStyle;
    topContentContainer: ViewStyle;
    userImageContainer: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#62b34c',
        color: 'white',
    },
    contentContainer: {
        flex: 17,
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    contentIcons: {
        flex: 3,
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingTop: 5,
    },
    contentMaterialIcons: {
        justifyContent: "center",
    },
    lastMessageContainer: {
        flex: 9,
        color: 'white',
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
        flex: 3,
        paddingRight: 10,
    },
    userNameStyle: {
        fontWeight: "bold",
        fontSize: 18,
        color: 'white',
    }
})
