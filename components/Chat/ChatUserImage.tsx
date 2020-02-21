import React from 'react';
import { Image, ImageStyle, ImageSourcePropType, View, ViewStyle } from 'react-native';

interface Props {
  containerStyle?: ViewStyle;
  source: ImageSourcePropType;
  style: ImageStyle;
};

const ChatUserImage: React.FunctionComponent<Props> = ({ source, containerStyle, style }: Props) => {
    return (
      <View style={[containerStyle]}>
        <Image
          style={style}
          source={source}
        />
      </View>
    )
};

export default ChatUserImage;
