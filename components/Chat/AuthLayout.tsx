import React from 'react';
import { View, StyleSheet, Image, ViewStyle, TextStyle, TouchableOpacity, KeyboardAvoidingView, KeyboardAvoidingViewProps, ImageStyle} from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import useLanguage from '../../hooks/useLanguage';
import { isIOS } from '../../utils';
import { AppLanguage } from '../../config/languages';
import { useDarkMode } from 'react-native-dark-mode';

let keyboardAvoidingViewProps: KeyboardAvoidingViewProps = {}

if (isIOS()) {
    keyboardAvoidingViewProps.behavior = "position"
}
if (!isIOS()) {
    keyboardAvoidingViewProps.behavior = "padding"
}

interface Props{
    goToLocation: any;
    children: React.ReactNode;
    buttonLabel: React.ReactChild;
};

const AuthLayout: React.FunctionComponent<Props> = ({
    goToLocation,
    children,
    buttonLabel
}: Props) => {

    const constants: AppConstants = useConstants();
    const language: AppLanguage =  useLanguage();
    const theme: AppTheme = useTheme();
    const mode = useDarkMode();
    const keyboardVerticalOffset = isIOS ? 40 : 0;

    return (
 
        <View style={style.mainContainer}>
            <KeyboardAvoidingView {...keyboardAvoidingViewProps} keyboardVerticalOffset={keyboardVerticalOffset} enabled>
                <View style={style.container}>
                    <Image
                        source={constants.appLogo}
                        style={style.imageStyle}
                    />
                </View>
                <View style={style.contentContainer}>
                    <ThemedText styleKey="textColor" style={[style.nameStyle, {color: mode ? theme.lightTextColor : theme.textColor}]}>{language.appName}</ThemedText>
                </View>
                {children}
                <View style={[style.container,{paddingTop: 40}]}>
                    <TouchableOpacity onPress={goToLocation} style={[style.loginStyle, {borderColor: theme.lightBottomColor}]}>
                        <ThemedText styleKey="textColor" style={{color: mode ? theme.lightTextColor : theme.textColor}}>{buttonLabel}</ThemedText> 
                    </TouchableOpacity> 
                </View>
            </KeyboardAvoidingView>
        </View>

    );
}

export default AuthLayout;

interface Style {
    mainContainer: ViewStyle;
    container: ViewStyle;
    contentContainer: ViewStyle;
    nameStyle: TextStyle;
    topContainer: ViewStyle;
    loginStyle: ViewStyle;
    imageStyle: ImageStyle;
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
        paddingBottom: 30,
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
    },
    imageStyle: {
        width: 100, 
        height: 100, 
    }
})