import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Image, ImageStyle, ViewStyle, ImageSourcePropType, ActivityIndicator } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props{
    source: ImageSourcePropType;
}

const ChatProfileMedia: React.FunctionComponent<Props> = ({
    source
}: Props) => {

  const theme: AppTheme = useTheme();
  const [loaded, setLoaded] = useState<boolean>(false);

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
        {loaded ? null : (
          <ActivityIndicator animating={true} size="large" color={theme.appColor} style={style.imageStyle}/>
        )}
        {
          gallery.map((data,index) => 
            <Image
              style={style.image}
              source={data.source}
              onLoad={() => setLoaded(true)}
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
    imageStyle: ImageStyle;
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
    imageStyle: {
      position: "absolute",
      top: 65,
      left: 75,
    },
})
