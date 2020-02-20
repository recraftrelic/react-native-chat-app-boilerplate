import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle, StatusBar } from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import ThemedText from '../UI/ThemedText';

interface Props{
    block: string;
    report: string;
};

const ChatProfile: React.FunctionComponent<Props> = ({
    block,
    report,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View>
        <TouchableOpacity>
            <View style={style.container}>
                <ThemedText styleKey="textColor" style={[style.userNameStyle, {borderColor: theme.lightBottomColor}]}>{block}</ThemedText>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={style.container}>
                <ThemedText styleKey="textColor" style={[style.userNameStyle, {borderColor: theme.lightBottomColor}]}>{report}</ThemedText>
            </View>
        </TouchableOpacity>
        </View>
    );
};

export default ChatProfile;

interface Style {
    container: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
    },
    userNameStyle: {
        fontWeight: "bold",
        borderWidth: 2,
        padding: 10,
    }
})
