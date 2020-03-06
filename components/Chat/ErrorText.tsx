import React from 'react';
import { StyleSheet, View, TextStyle } from 'react-native';
import ThemedText from '../UI/ThemedText';

interface LoginError {
    length?: LoginError;
    username?: string[];
    password?: string[];
}

interface Props {
    error: LoginError;
};

const ErrorText: React.FunctionComponent<Props> = ({
    error,
}: Props) => {

    return (
        <View>
            {
                error && error.length ? 
                    <ThemedText styleKey="errorColor" style={style.textContainer}>{error[0]}</ThemedText>
                : null
            } 
        </View>    
    );
};

export default ErrorText;

interface Style {
    textContainer: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    textContainer: {
        padding: 10, 
    },
})
