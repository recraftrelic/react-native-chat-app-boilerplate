import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, StyleSheet, Image, ViewStyle, TextStyle, TouchableOpacity, KeyboardAvoidingView, KeyboardAvoidingViewProps} from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import Input from '../../components/Chat/Input';
import microValidator from 'micro-validator' ;
import { isIOS } from '../../utils';

interface LoginField {
    username?: string;
    password?: string;
}

export interface ValidationError {
    [key: string]: string[];
}

const validate = (data: LoginField): ValidationError => {
    const errors = microValidator.validate({
        username: {
            required: {
                errorMsg: `Username is required`
            }
        },
        password: {
            required: {
                errorMsg: `Password is required`
            },
            length: {
                min: 6,
                max: 12,
                errorMsg: 'Password length between 6 and 12'
            }
        },
    }, data)
    
    return errors
}

let keyboardAvoidingViewProps: KeyboardAvoidingViewProps = {}

if (isIOS()) {
    keyboardAvoidingViewProps.behavior = "position"
}

const Login: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {

    const [username,onChangeUsername] = useState<string>("")
    const [password,onChangePassword] = useState<string>("")
    const [errors,setErrors] = useState<ValidationError>({})
      
    const goToChatList = () => {
        const errors: ValidationError = validate({username: username,password: password})

        if(!Object.keys(errors).length)
        {
            history.push('/chatlist')
        }
        else {
            setErrors(errors)
        }
    }

    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();
    const keyboardVerticalOffset = isIOS ? 40 : 0;

    return (
        <>
        <View style={style.mainContainer}>
        <KeyboardAvoidingView {...keyboardAvoidingViewProps} keyboardVerticalOffset={keyboardVerticalOffset} enabled>
            <View style={style.container}>
                <Image
                    source={{ uri: constants.appLogo }}
                    style={{width: 100, height: 100, borderRadius: 50}}
                />
            </View>
            <View style={[style.contentContainer ,{paddingTop: 10, paddingBottom: 30}]}>
                <ThemedText styleKey="textColor" style={style.nameStyle}>{constants.appName}</ThemedText>
            </View>
            <Input
                placeholder={constants.usernamePlacerHolder}
                onChangeText={onChangeUsername}
                value={username}
                errors={errors.username}
            />
            <Input
                placeholder={constants.passwordPlacerHolder}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
                errors={errors.password}
            />
             <View style={[style.container,{paddingTop: 50}]}>
                <TouchableOpacity onPress={goToChatList} style={[style.loginStyle, {borderColor: theme.lightBottomColor}]}>
                    <ThemedText styleKey="textColor">{constants.loginButton}</ThemedText> 
                </TouchableOpacity> 
            </View>
            </KeyboardAvoidingView>
        </View>
        <View style={style.topContainer}>
            <ThemedText styleKey="lightTextColor">{constants.signupCheck}</ThemedText>
            <TouchableOpacity>
                <ThemedText styleKey="lightTextColor" style={{color: theme.appColor}}>{constants.signupButton}</ThemedText>
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