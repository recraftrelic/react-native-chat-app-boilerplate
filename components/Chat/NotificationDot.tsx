import React from 'react';
import { Text, TextStyle, View, ViewStyle, StyleSheet } from 'react-native';

interface Props {
    notificationCount: number;
}

const NotificationDot: React.FunctionComponent<Props> = ({
    notificationCount
}: Props) => {
    return (
      <View style={style.container}>
          <Text style={style.text}>{notificationCount}</Text>
      </View>
    )
};

export default NotificationDot;

interface Style {
    container: ViewStyle,
    text: TextStyle,
}

const style: Style = StyleSheet.create<Style>({
    container: {
        width: 20,
        height: 20,
        backgroundColor: "green",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white"
    }
})
