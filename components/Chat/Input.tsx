import React from 'react';
import { StyleSheet, View, ViewStyle, TextInput, TextInputProps } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import { isIOS } from '../../utils';
import ErrorText from './ErrorText';

const extraSpace = isIOS() ? 10 : 0;

interface Props extends TextInputProps {
    errors: any;
};

const Input: React.FunctionComponent<Props> = (props: Props) => {
    const theme: AppTheme = useTheme();
    const { errors, ...restProps } = props;

    return (
        <>
            <View style={[style.containerNew, {borderColor: theme.lightBottomColor}]}>
                <View style={style.textContainer}>
                    <TextInput
                        placeholderTextColor={theme.lightTextColor}
                        style={{ color: theme.textColor }}
                        {...restProps}
                    />   
                </View>    
            </View>  
            <ErrorText
                error={errors}
            /> 
        </>
    );
};

export default Input;

interface Style {
    containerNew: ViewStyle;
    textContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    containerNew: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 0,
        marginTop: 10,
        borderBottomWidth: 2,
    },
    textContainer: {
        flex: 9,
        paddingTop: extraSpace,
        paddingBottom: extraSpace,
    },
})
