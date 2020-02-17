import React from 'react';
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';
import TimeDuration from './TimeDuration';

interface Props {
    userName: string;
    timeStamp: Date;
};

const ChatDetailBody: React.FunctionComponent<Props> = ({
    userName,
    timeStamp,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View style={style.container}>
            <View style={style.contentContainer}>
                <View style={style.topContentContainer}>
                    <View style={style.timeContainer}>
                        <TimeDuration
                            date={timeStamp}
                        />
                    </View>
                </View>
                <View style={[style.topContentData, {backgroundColor: theme.lightBottomColor}]}>
                    <View style={style.dataContainer}>
                        <ThemedText styleKey="textColor" style={style.userNameStyle}>{userName}</ThemedText>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ChatDetailBody;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    topContentContainer: ViewStyle;
    timeContainer: ViewStyle;
    dataContainer: ViewStyle;
    userNameStyle: TextStyle;
    topContentData: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 20,
    },
    contentContainer: {
        flex: 10,
        justifyContent: "space-between",
        paddingTop: 5,
        paddingBottom: 5,
    },
    topContentContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    timeContainer: {
        flex: 3,
        paddingTop: 5,
    },
    dataContainer: {
        flex: 7,
        alignItems: "flex-end"
    },
    userNameStyle: {
        fontSize: 14,
    },
    topContentData: {
        flexDirection: "column",
        padding: 20,
        justifyContent: "space-between",
    },
})
