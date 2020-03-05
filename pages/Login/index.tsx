import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, StyleSheet, Image, ViewStyle, TextStyle, TouchableOpacity} from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import PlaceholderField from '../../components/Chat/PlaceholderField';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
      
    const goToChatList = () => {
        history.push('/chatlist')
    } 
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();

    return (
        <>
        <View style={style.mainContainer}>
            <View style={style.container}>
                <Image
                    source={{ uri: constants.appLogo }}
                    style={{width: 100, height: 100, borderRadius: 50}}
                />
            </View>
            <View style={[style.contentContainer ,{paddingTop: 10, paddingBottom: 30}]}>
                <ThemedText styleKey="textColor" style={style.nameStyle}>{constants.appName}</ThemedText>
            </View>
            <PlaceholderField
                firstPlaceholder={constants.usernamePlacerHolder}
                secondPlaceholder={constants.passwordPlacerHolder}
            />
             <View style={[style.container,{paddingTop: 50}]}>
                <TouchableOpacity onPress={goToChatList} style={[style.loginStyle, {borderColor: theme.lightBottomColor}]}>
                    <ThemedText styleKey="textColor">Login</ThemedText>
                    <MaterialIcon name="login" size={20} color={theme.textColor} style={{paddingTop: 3}}/>  
                </TouchableOpacity> 
            </View>
        </View>
        <View style={style.topContainer}>
            <ThemedText styleKey="lightTextColor">If you don't have an account</ThemedText>
            <TouchableOpacity>
                <ThemedText styleKey="lightTextColor" style={{color:'#ed5d45'}}>Signup</ThemedText>
            </TouchableOpacity>
        </View>
        </>
    );
}

export default Login;

interface Style {
    mainContainer: ViewStyle;
    container: ViewStyle;
    contentContainer: ViewStyle;
    nameStyle: TextStyle;
    topContainer: ViewStyle;
    loginStyle: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'stretch',
        padding: 30,
        flex: 1
    },
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        padding: 15,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
    },
    nameStyle: {
        fontWeight: "bold",
        fontSize: 24,
    },
    topContainer: {
        flexDirection: 'column',
        justifyContent: "flex-end",
        alignItems: 'center',
        paddingBottom: 10
    },
    loginStyle: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        width: 170,
        borderWidth: 2,
        borderRadius: 50,
        padding: 10,
    }
})
