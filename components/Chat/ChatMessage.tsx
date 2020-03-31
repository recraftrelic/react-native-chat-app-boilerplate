import React from 'react';
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';
import TimeDuration from './TimeDuration';
import { useDarkMode } from 'react-native-dark-mode';
import { ThemeKey } from '../../config/themes';

interface Props {
    message: string;
    timeStamp: Date;
    isRightAlign: boolean;
};

const ChatMessage: React.FunctionComponent<Props> = ({
    message,
    timeStamp,
    isRightAlign,
}: Props) => {
    const theme: AppTheme = useTheme();
    const mode = useDarkMode();
    const rowStyle: ViewStyle = { flexDirection: isRightAlign ? 'row' : 'row-reverse' }

    return (
        <View style={[style.container, rowStyle]}>
            <View style={ isRightAlign ? style.topContentContainer : style.flipContentContainer }>
                <View style={style.timeContainer}>
                    <TimeDuration
                        date={timeStamp}
                    />
                </View>
            </View>
            <View style={ isRightAlign ? [style.topContentData, {backgroundColor: mode ? '#666666' : theme.lightBottomColor}] :  [style.flipContentData, {backgroundColor: mode ? '#4682b4' : theme.alternateMessageBackgroundColor}]}>
                <View style={style.dataContainer}>
                    <ThemedText styleKey="textColor" style={[style.userNameStyle, {color: mode ? theme.lightTextColor : theme.textColor}]}>{message}</ThemedText>
                </View>
            </View>
        </View>
    );
};

export default ChatMessage;

interface Style {
    container: ViewStyle;
    topContentContainer: ViewStyle;
    flipContentContainer: ViewStyle;
    timeContainer: ViewStyle;
    dataContainer: ViewStyle;
    userNameStyle: TextStyle;
    topContentData: ViewStyle;
    flipContentData: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        paddingTop: 30,
        flex: 1,
    },
    topContentContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    topContentData: {
        flexDirection: 'row-reverse',
        flex: 2,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    flipContentContainer: {
        flexDirection: 'row-reverse',
        flex: 1,
        alignItems: 'center',
    },
    flipContentData: {
        flexDirection: 'row',
        flex: 2,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    timeContainer: {
        flex: 1,
        alignItems: 'center',
    },
    dataContainer: {
        flex: 2,
        padding: 20,
    },
    userNameStyle: {
        fontSize: 14,
    }
})
