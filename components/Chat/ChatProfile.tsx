import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import ThemedText from '../UI/ThemedText';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDarkMode } from 'react-native-dark-mode';

interface Props{
    block: string;
    report: string;
    deleteConversation: string;
};

const ChatProfile: React.FunctionComponent<Props> = ({
    block,
    report,
    deleteConversation
}: Props) => {
    const theme: AppTheme = useTheme();
    const mode = useDarkMode();

    return (
        <View>
        <TouchableOpacity>
            <View style={[style.container, {borderColor: theme.lightBottomColor}]}>
                <ThemedText styleKey="textColor" style={[style.userNameStyle, {color : mode ? theme.lightTextColor : theme.textColor}]}>{block}</ThemedText>
                <MaterialIcon name="block-helper" size={20} color={theme.textColor} style={[style.materialStyle, {color: theme.warningColor}]}/>           
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={[style.container, {borderColor: theme.lightBottomColor}]}>
                <ThemedText styleKey="textColor" style={[style.userNameStyle, {color : mode ? theme.lightTextColor : theme.textColor}]}>{report}</ThemedText>
                <MaterialIcon name="flag-variant" size={20} color={theme.textColor} style={[style.materialStyle, {color: theme.warningColor}]}/>   
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={[style.container, {borderColor: theme.lightBottomColor}]}>
                <ThemedText styleKey="textColor" style={[style.userNameStyle, {color : mode ? theme.lightTextColor : theme.textColor}]}>{deleteConversation}</ThemedText>
                <MaterialIcon name="delete" size={20} color={theme.textColor} style={[style.materialStyle, {color: theme.warningColor}]}/>   
            </View>
        </TouchableOpacity>
        </View>
    );
};

export default ChatProfile;

interface Style {
    container: ViewStyle;
    userNameStyle: TextStyle;
    materialStyle: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
    },
    userNameStyle: {
        fontWeight: "bold",
        alignItems: "flex-start"
    },
    materialStyle: {
        alignItems: "flex-end"
    }
})
