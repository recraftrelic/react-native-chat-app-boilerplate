import React from 'react';
import { ScrollView, StyleSheet, View, ImageStyle, ViewStyle, ImageSourcePropType } from 'react-native';
import ImageWithLoader from './ImageWithLoader';

interface Props{
    source: ImageSourcePropType;
}

const ChatProfileMedia: React.FunctionComponent<Props> = ({
    source
}: Props) => {

  const gallery = [
    {
      source: source
    },
    {
      source: source
    },
    {
      source: source
    },
    {
      source: source
    },
    {
      source: source
    }
  ];

  return (
    <View style={style.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          gallery.map((data,index) => 
            <ImageWithLoader
              source={data.source}
              style={style.image}
              loaderStyle={style.image}
              key={index}
            />
          )
        }
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
