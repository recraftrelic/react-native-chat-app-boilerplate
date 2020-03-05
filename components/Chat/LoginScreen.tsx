import React from 'react';
import { GestureResponderEvent, ImageStyle, ImageSourcePropType, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle, TextInput, Dimensions } from 'react-native';
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
    login: string;
    createAccount: string;
    onButtonPress?: (event: GestureResponderEvent) => void
};

const { height, width}: any = Dimensions.get('window');

const LoginScreen: React.FunctionComponent<Props> = ({
    userImageSource,
    name,
    username,
    password,
    login,
    createAccount,
    onButtonPress
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View>
            <View style={style.container}>
                <ChatUserImage
                    source={userImageSource}
                    containerStyle={style.userImageContainer}
                    imageStyle={{width: 100, height: 100, borderRadius: 50}}
                />
            </View>
            <View style={[style.contentContainer ,{paddingTop: 10, paddingBottom: 30}]}>
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
            <View style={[style.container,{paddingTop: 50}]}>
                <TouchableOpacity onPress={onButtonPress} style={[style.loginStyle, {borderColor: theme.lightBottomColor}]}>
                    <ThemedText styleKey="textColor">{login}</ThemedText>
                    <MaterialIcon name="login" size={20} color={theme.textColor} style={{paddingTop: 3}}/>  
                </TouchableOpacity> 
            </View>
            <View style={style.topContainer}>
                <ThemedText styleKey="lightTextColor">{createAccount}</ThemedText>
                <TouchableOpacity>
                    <ThemedText styleKey="lightTextColor" style={{color:'#ed5d45'}}>Signup</ThemedText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    topContainer: ViewStyle;
    userImageContainer: ImageStyle;
    companyName: TextStyle;
    userNameStyle: TextStyle;
    materialStyle: ViewStyle;
    containerNew: ViewStyle;
    loginStyle: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        padding: 15,
        paddingTop: 150
    },
    containerNew: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        borderBottomWidth: 2,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
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
    userNameStyle: {
        fontWeight: "bold",
        alignItems: "flex-start"
    },
    materialStyle: {
        alignItems: "flex-end"
    },
    loginStyle: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        width: 170,
        borderWidth: 2,
        borderRadius: 50,
        padding: 10,
    },
    topContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        width: width,
        height: height - 400,
    }
})
