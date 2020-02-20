import React from 'react';
import { ScrollView, StyleSheet, View, Image, ImageStyle, ViewStyle, ImageSourcePropType } from 'react-native';

interface Props{
    source: ImageSourcePropType;
};

const ChatProfileMedia: React.FunctionComponent<Props> = ({
    source
}: Props) => {

    return (
        <View style={style.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            style={style.image}
            source={source}
          />
          <Image
            style={style.image}
            source={source}
          />
          <Image
            style={style.image}
            source={source}
          />
          <Image
            style={style.image}
            source={source}
          />
          <Image
            style={style.image}
            source={source}
          />
        </ScrollView>
        </View>
    );
};

export default ChatProfileMedia;          
          
interface Style {
    image: ImageStyle
    container: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    image: {
        width: 170,
        height: 150,
    },
    container: {
        flexDirection: 'row',
        padding: 20,
    },
})
