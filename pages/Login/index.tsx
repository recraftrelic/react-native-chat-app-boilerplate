import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import { ValidationError } from '../../config/validation';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import Input from '../../components/Chat/Input';
import microValidator from 'micro-validator' ;
import AuthLayout from '../../components/Chat/AuthLayout';
import SplashScreen from 'react-native-splash-screen';

interface LoginField {
    username?: string;
    password?: string;
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

const Login: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {

    useEffect(() => {
        SplashScreen.hide()
    });

    const [username,onChangeUsername] = useState<string>("")
    const [password,onChangePassword] = useState<string>("")
    const [errors,setErrors] = useState<ValidationError>({})

    const goToSignup = () => {
        history.push('/signup')
    }
      
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

    return (
        <>
            <AuthLayout buttonLabel={constants.loginButton} goToLocation={goToChatList}>
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
            </AuthLayout>
            <View style={style.topContainer}>
                <ThemedText styleKey="lightTextColor">{constants.signupCheck}</ThemedText>
                <TouchableOpacity onPress={goToSignup}>
                    <ThemedText styleKey="lightTextColor" style={{color: theme.appColor}}>{constants.signupButton}</ThemedText>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Login;

interface Style {
    topContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    topContainer: {
        flexDirection: 'column',
        justifyContent: "flex-end",
        alignItems: 'center',
        paddingBottom: 10
    }
})
