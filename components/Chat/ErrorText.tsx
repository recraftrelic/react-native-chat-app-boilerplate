import React from 'react';
import { StyleSheet, View, TextStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';

interface Props {
    error: any;
};

const ErrorText: React.FunctionComponent<Props> = ({
    error,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View>
            {
                error && error.length ? 
                    <ThemedText styleKey="warningColor" style={style.textContainer}>{error[0]}</ThemedText>
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
