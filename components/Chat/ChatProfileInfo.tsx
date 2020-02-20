import React from 'react';
import { GestureResponderEvent, Image, ImageStyle, ImageSourcePropType, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';

interface Props {
    userImageSource: ImageSourcePropType;
    userName: string;
    status: string;
    onButtonPress?: (event: GestureResponderEvent) => void
};

const ChatProfileInfo: React.FunctionComponent<Props> = ({
    userImageSource,
    userName,
    status,
    onButtonPress
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View>
        <View style={style.container}>
            <TouchableOpacity onPress={onButtonPress}>
                <Icon name="ios-arrow-back" size={40} color={theme.textColor} />
            </TouchableOpacity> 
        </View>
        <View style={style.contentContainer}>
            <Image
                source={userImageSource}
                style={style.userImageContainer}
            />
        </View>
        <View style={style.contentContainer}>
            <ThemedText styleKey="textColor" style={style.userNameStyle}>{userName}</ThemedText>
        </View>
        <View style={style.contentContainer}>
            <ThemedText styleKey="textColor" style={{fontStyle: "italic"}}>{status}</ThemedText>
        </View>
        </View>
    );
};

export default ChatProfileInfo;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    userImageContainer: ImageStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 20,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 10,
    },
    userImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userNameStyle: {
        fontWeight: "bold",
        fontSize: 18,
    }
})
