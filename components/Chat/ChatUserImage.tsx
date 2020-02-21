import React, { useState } from 'react';
import { AppTheme } from '../../config/DefaultConfig';

import useTheme from "../../hooks/useTheme";
import { Modal, Image, ImageStyle, ImageSourcePropType, View, ViewStyle, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

interface Props {
  containerStyle?: ViewStyle;
  source: ImageSourcePropType;
  imageStyle: ImageStyle;
};

const ChatUserImage: React.FunctionComponent<Props> = ({ source, containerStyle, imageStyle }: Props) => {
  const theme: AppTheme = useTheme();
  const [isModalsVisible, setModalVisible] = useState<boolean>(false);

    return (
      <View style={[containerStyle]}>
        { isModalsVisible ? 
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalsVisible}
          onRequestClose={() => {alert('Modal');}}>
          <TouchableOpacity style={[style.modalContainer, {backgroundColor: theme.modalBackgroundColor}]} activeOpacity={1.0} onPress={() => {setModalVisible(false);}}>
            <View>
              <Image
                  style={[imageStyle, {width: 250, height: 250, borderRadius: 0}]}
                  source={source}
                />
            </View>
          </TouchableOpacity>
        </Modal> 
        : null }
        <TouchableOpacity onPress={() => {setModalVisible(true);}}>
          <Image
            style={imageStyle}
            source={source}
          />
        </TouchableOpacity>
      </View>
    )
};

export default ChatUserImage;

interface Style {
  modalContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  modalContainer: {
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  },
})
