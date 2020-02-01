import React from 'react';
import { Image, ImageStyle, ImageSourcePropType, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  containerStyle?: ViewStyle;
  source: ImageSourcePropType
};

const ChatUserImage: React.FunctionComponent<Props> = ({ source, containerStyle }: Props) => {
    return (
      <View style={[style.container, containerStyle]}>
        <Image
          style={style.image}
          source={source}
        />
      </View>
    )
};

export default ChatUserImage;

interface Style {
  container: ViewStyle,
  image: ImageStyle
}

const style: Style = StyleSheet.create<Style>({
  container: {
    // padding: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
})
