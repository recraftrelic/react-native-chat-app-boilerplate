import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import ThemedText from '../UI/ThemedText';
import { useDarkMode } from 'react-native-dark-mode';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props {
    lastMessage: string;
    isTyping?: boolean;
};

const LastMessage: React.FunctionComponent<Props> = ({
    isTyping,
    lastMessage,
}: Props) => {

    const theme: AppTheme = useTheme();
    const mode = useDarkMode();

    if (isTyping) {
        return <ThemedText styleKey="highlightColor" style={[style.typingText, {color: mode ? theme.lightTextColor : theme.textColor}]}>typing...</ThemedText>
    }

    return <ThemedText styleKey="textColor" style={{color: mode ? theme.lightTextColor : theme.textColor}} numberOfLines={1}>{lastMessage}</ThemedText>
}

export default LastMessage;

interface Style {
    typingText: TextStyle
}

const style: Style = StyleSheet.create<Style>({
    typingText: {
        fontWeight: "bold"
    }
})
