import React, { useState } from 'react';
import { View, TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import { AppTheme } from '../../config/DefaultConfig';
import { ValidationError } from '../../config/validation';
import useLanguage from '../../hooks/useLanguage';
import Input from '../../components/Chat/Input';
import AuthLayout from '../../components/Chat/AuthLayout';
import microValidator from 'micro-validator' ;
import Icon from 'react-native-vector-icons/Ionicons';
import useTheme from '../../hooks/useTheme';
import { AppLanguage } from '../../config/languages';
import { useDarkMode } from 'react-native-dark-mode';

interface LoginField {
    name?: string;
    username?: string;
    email?: string;
    password?: string;
}

const Signup: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {

    const theme: AppTheme = useTheme();
    const language: AppLanguage = useLanguage();
    const mode = useDarkMode();

    const validate = (data: LoginField): ValidationError => {
        const errors = microValidator.validate({
            name: {
                required: {
                    errorMsg: language.signupValidation.name
                }
            },
            username: {
                required: {
                    errorMsg: language.signupValidation.username
                }
            },
            email: {
                required: {
                    errorMsg: language.signupValidation.email
                },
                email: {
                    errorMsg: language.signupValidation.validEmail
                }
            },
            password: {
                required: {
                    errorMsg: language.signupValidation.password
                },
                length: {
                    min: 6,
                    max: 12,
                    errorMsg: language.signupValidation.passwordLength
                }
            },
        }, data)
        
        return errors
    }

    const [name,onChangeName] = useState<string>("")
    const [username,onChangeUsername] = useState<string>("")
    const [email,onChangeEmail] = useState<string>("")
    const [password,onChangePassword] = useState<string>("")
    const [errors,setErrors] = useState<ValidationError>({})
      
    const goToLogin = () => {
        const errors: ValidationError = validate({name: name,username: username,email: email,password: password})

        if(!Object.keys(errors).length)
        {
            history.push('/chatlist')
        }
        else {
            setErrors(errors)
        }
    }

    const onBackPress = () => {
        history.goBack()
    }

    return (
        <>
        <View style={style.container}>
            <TouchableOpacity onPress={onBackPress}>
                <Icon name="ios-arrow-back" size={40} color={mode ? theme.lightTextColor : theme.textColor} />
            </TouchableOpacity>  
        </View>
        <AuthLayout buttonLabel={language.signupButton} goToLocation={goToLogin}>
            <Input
                placeholder={language.namePlaceholder}
                onChangeText={onChangeName}
                value={name}
                errors={errors.name}
                style={{color: mode ? theme.lightTextColor : theme.textColor}}
            />
            <Input
                placeholder={language.usernamePlacerHolder}
                onChangeText={onChangeUsername}
                value={username}
                errors={errors.username}
                style={{color: mode ? theme.lightTextColor : theme.textColor}}
            />
            <Input
                placeholder={language.emailPlacerHolder}
                onChangeText={onChangeEmail}
                value={email}
                errors={errors.email}
                style={{color: mode ? theme.lightTextColor : theme.textColor}}
            />
            <Input
                placeholder={language.passwordPlacerHolder}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
                errors={errors.password}
                style={{color: mode ? theme.lightTextColor : theme.textColor}}
            />
        </AuthLayout>
        </>
    );
}

export default Signup;

interface Style {
    container: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 20,
    },
})
