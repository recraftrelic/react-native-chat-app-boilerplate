import React, { useState } from 'react';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import { Modal, ImageStyle, ImageSourcePropType, View, ViewStyle, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import ImageWithLoader from './ImageWithLoader';

interface Props {
  containerStyle?: ViewStyle;
  source: ImageSourcePropType;
  imageStyle: ImageStyle;
};

const { height, width } = Dimensions.get('window')

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
              <ImageWithLoader
                source={source}
                style={style.modalStyle}
                loaderStyle={style.modalImageStyle}
              />
            </View>
          </TouchableOpacity>
        </Modal> 
        : null }
        <TouchableOpacity onPress={() => {setModalVisible(true);}}>
          <ImageWithLoader
            source={source}
            style={imageStyle}
            loaderStyle={style.imageStyle}
          />
        </TouchableOpacity>
      </View>
    )
};

export default ChatUserImage;

interface Style {
  modalContainer: ViewStyle;
  modalImageStyle: ImageStyle;
  imageStyle: ImageStyle;
  modalStyle: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
  modalContainer: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    width: width,
    height: height,
  },
  modalImageStyle: {
    position: "absolute",
    top: 105,
    left: 105,
  },
  imageStyle: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  modalStyle: {
    width: 250, 
    height: 250, 
    borderRadius: 0
  }
})
