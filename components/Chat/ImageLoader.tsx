import React, { useState } from 'react';
import { ActivityIndicator, Image, ImageStyle, ImageSourcePropType } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props extends ImageStyle {
  source: ImageSourcePropType;
  style: ImageStyle;
  imageStyle: ImageStyle;
}

const ImageLoader: React.FunctionComponent<Props> = (props: Props) => {
  const theme: AppTheme = useTheme();
  const [loaded, setLoaded] = useState<boolean>(false);

  const { source, imageStyle, ...restProps } = props;

  return <>
    {loaded ? null : (
        <ActivityIndicator animating={true} size="small" color={theme.appColor} {...restProps}/>
    )}
    <Image
      source={source}
      style={imageStyle}
      onLoad={() => setLoaded(true)}
    />
  </>
};

export default ImageLoader;