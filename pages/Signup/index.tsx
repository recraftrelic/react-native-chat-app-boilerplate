import React, { useState } from 'react';
import { View, TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import { ValidationError } from '../../config/validation';
import useConstants from '../../hooks/useConstants';
import Input from '../../components/Chat/Input';
import AuthLayout from '../../components/Chat/AuthLayout';
import microValidator from 'micro-validator' ;
import Icon from 'react-native-vector-icons/Ionicons';
import useTheme from '../../hooks/useTheme';

interface LoginField {
    name?: string;
    username?: string;
    email?: string;
    password?: string;
}

const validate = (data: LoginField): ValidationError => {
    const errors = microValidator.validate({
        name: {
            required: {
                errorMsg: `Full Name is required`
            }
        },
        username: {
            required: {
                errorMsg: `Username is required`
            }
        },
        email: {
            required: {
                errorMsg: `Email is required`
            },
            email: {
                errorMsg: 'Please enter a valid email'
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

const Signup: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {

    const theme: AppTheme = useTheme();

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

    const constants: AppConstants = useConstants();

    return (
        <>
        <View style={style.container}>
            <TouchableOpacity onPress={onBackPress}>
                <Icon name="ios-arrow-back" size={40} color={theme.textColor} />
            </TouchableOpacity>  
        </View>
        <AuthLayout buttonLabel={constants.signupButton} goToLocation={goToLogin}>
            <Input
                placeholder={constants.namePlaceholder}
                onChangeText={onChangeName}
                value={name}
                errors={errors.name}
            />
            <Input
                placeholder={constants.usernamePlacerHolder}
                onChangeText={onChangeUsername}
                value={username}
                errors={errors.username}
            />
            <Input
                placeholder={constants.emailPlacerHolder}
                onChangeText={onChangeEmail}
                value={email}
                errors={errors.email}
            />
            <Input
                placeholder={constants.passwordPlacerHolder}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
                errors={errors.password}
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
