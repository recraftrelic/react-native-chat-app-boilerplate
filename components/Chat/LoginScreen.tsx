import React from 'react';
import { GestureResponderEvent, ImageStyle, ImageSourcePropType, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle, TextInput } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import ChatUserImage from './ChatUserImage';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    userImageSource: ImageSourcePropType;
    name: string;
    username: string;
    password: string;
    onButtonPress?: (event: GestureResponderEvent) => void
};

const LoginScreen: React.FunctionComponent<Props> = ({
    userImageSource,
    name,
    username,
    password,
    onButtonPress
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View>
        <View style={style.contentContainer}>
            <ChatUserImage
                source={userImageSource}
                containerStyle={style.userImageContainer}
                imageStyle={{width: 100, height: 100, borderRadius: 50}}
            />
        </View>
        <View style={[style.contentContainer ,{paddingTop: 10}]}>
            <ThemedText styleKey="textColor" style={style.companyName}>{name}</ThemedText>
        </View>
        <View style={[style.containerNew, {borderColor: theme.lightBottomColor}]}>
            <TextInput
                placeholder={username}
                placeholderTextColor={theme.lightTextColor}
                style={{ color: theme.textColor }}
            />         
        </View>
        <View style={[style.containerNew, {borderColor: theme.lightBottomColor}]}>
            <TextInput
                placeholder={password}
                placeholderTextColor={theme.lightTextColor}
                style={{ color: theme.textColor }}
            />         
        </View>
        <TouchableOpacity onPress={onButtonPress}>
            <View style={[style.contentContainer, {borderColor: theme.lightBottomColor}]}>
                <ThemedText styleKey="textColor">Login</ThemedText>
                <MaterialIcon name="login" size={20} color={theme.textColor} style={style.materialStyle}/>   
            </View>
        </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    backButton: ViewStyle;
    editButton: ViewStyle;
    userImageContainer: ImageStyle;
    companyName: TextStyle;
    inputStyle: ViewStyle;
    userNameStyle: TextStyle;
    materialStyle: ViewStyle;
    containerNew: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 15,
    },
    containerNew: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    backButton: {
        padding: 10,
        alignItems: "flex-start",
    },
    editButton: {
        padding: 10,
        alignItems: "flex-end",
    },
    userImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    companyName: {
        fontWeight: "bold",
        fontSize: 24,
    },
    inputStyle: {
        borderWidth: 2, 
        padding: 10, 
    },
    userNameStyle: {
        fontWeight: "bold",
        alignItems: "flex-start"
    },
    materialStyle: {
        alignItems: "flex-end"
    }
})
