import React, { useState } from 'react';
import { ActivityIndicator, Image, ImageStyle, ImageSourcePropType, ImageProps } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props extends ImageProps {
  loaderStyle: ImageStyle;
}

const ImageWithLoader: React.FunctionComponent<Props> = (props: Props) => {
  const theme: AppTheme = useTheme();
  const [loaded, setLoaded] = useState<boolean>(false);

  const { source, loaderStyle, ...restProps } = props;

  return <>
    {loaded ? null : (
        <ActivityIndicator animating={true} size="small" color={theme.appColor} {...restProps}/>
    )}
    <Image
      source={source}
      style={loaderStyle}
      onLoad={() => setLoaded(true)}
    />
  </>
};

export default ImageWithLoader;