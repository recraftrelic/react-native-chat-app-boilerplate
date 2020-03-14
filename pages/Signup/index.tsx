import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-native';
import { AppConstants } from '../../config/DefaultConfig';
import { ValidationError } from '../../config/validation';
import useConstants from '../../hooks/useConstants';
import Input from '../../components/Chat/Input';
import AuthLayout from '../../components/Chat/AuthLayout';
import microValidator from 'micro-validator' ;

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

    const constants: AppConstants = useConstants();

    return (
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
    );
}

export default Signup;
