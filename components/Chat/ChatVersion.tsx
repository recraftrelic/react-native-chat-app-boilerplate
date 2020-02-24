import React from 'react';
import { View, ViewStyle, StyleSheet, Dimensions} from 'react-native';
import ThemedText from '../UI/ThemedText';

interface Props {
  name: string;
};

const { height, width } = Dimensions.get('window')

const ChatVersion: React.FunctionComponent<Props> = ({
 name,
}: Props) => {

  return (
    <View>
      <View style={style.topContainer}>
          <ThemedText styleKey="lightTextColor">{name}</ThemedText>
      </View>
    </View>
  )
};

export default ChatVersion;

interface Style {
  topContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  topContainer: {
    flexDirection: 'column',
      justifyContent: "center",
      alignItems: 'center',
      width: width,
      height: height - 200,
  }
});
