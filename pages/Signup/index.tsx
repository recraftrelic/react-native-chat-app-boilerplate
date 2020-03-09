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
    name?: string;
    username?: string;
    email?: string;
    password?: string;
}

export interface ValidationError {
    [key: string]: string[];
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

let keyboardAvoidingViewProps: KeyboardAvoidingViewProps = {}

if (isIOS()) {
    keyboardAvoidingViewProps.behavior = "position"
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
            history.goBack()
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
                    <View style={[style.container,{paddingTop: 50}]}>
                        <TouchableOpacity onPress={goToLogin} style={[style.loginStyle, {borderColor: theme.lightBottomColor}]}>
                            <ThemedText styleKey="textColor">{constants.signupButton}</ThemedText> 
                        </TouchableOpacity> 
                    </View>
                </KeyboardAvoidingView>
            </View>
        </>
    );
}

export default Signup;

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
