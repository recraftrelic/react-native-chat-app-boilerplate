import React from 'react';
import { GestureResponderEvent, ImageSourcePropType, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import { AppTheme, lightTheme, darkTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ChatUserImage from './ChatUserImage';
import ThemedText from '../UI/ThemedText';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useConstants from '../../hooks/useConstants';

interface Props {
    userImageSource: ImageSourcePropType;
    userName: string;
    status: string;
    onBackPress?: (event: GestureResponderEvent) => void
    onNextPress?: (event: GestureResponderEvent) => void
};

const ChatDetailHeader: React.FunctionComponent<Props> = ({
    onBackPress,
    onNextPress,
    userImageSource,
    userName,
    status,
}: Props) => {
    const theme: AppTheme = useTheme();
    const constants: AppConstants = useConstants();

    return (
        <View style={[style.container, {borderBottomColor: theme.lightBottomColor}]}>
            <TouchableOpacity onPress={onBackPress}>
                <Icon name="ios-arrow-back" size={40} color={theme.textColor} style={style.contentIcons}/>
            </TouchableOpacity>  
            <ChatUserImage
                source={userImageSource}
                containerStyle={style.userImageContainer}
                imageStyle={{width: 50, height: 50, borderRadius: 50}}
            />
            <View style={style.contentContainer}>
                <View style={style.topContentContainer}>
                    <TouchableOpacity onPress={onNextPress}>
                        <ThemedText styleKey="textColor" style={style.userNameStyle}>{userName}</ThemedText>
                        <ThemedText styleKey="textColor">{status}</ThemedText>
                    </TouchableOpacity> 
                </View>
            </View>
            <View style={style.topContentContainer}>
                <MaterialIcon name="dots-vertical" size={40} color={theme.textColor} style={style.contentMaterialIcons} />
            </View>
        </View>
    );
};

export default ChatDetailHeader;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    contentIcons: ViewStyle;
    contentMaterialIcons: ViewStyle;
    topContentContainer: ViewStyle;
    userImageContainer: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
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
        paddingLeft: 5,
        paddingTop: 5,
    },
    contentMaterialIcons: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 3,
    },
    topContentContainer: {
        flexDirection: "column",
        alignItems: 'stretch',
    },
    userImageContainer: {
        flex: 3,
        paddingRight: 10,
        paddingLeft: 20,
    },
    userNameStyle: {
        fontWeight: "bold",
        fontSize: 18,
    }
})
