import React from 'react';
import { StyleSheet, View, TextStyle } from 'react-native';
import ThemedText from '../UI/ThemedText';

interface Props {
    error: string[];
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
        paddingTop: 10, 
    },
})
