import React, { useState } from 'react';
import { Modal, Image, ImageStyle, ImageSourcePropType, View, ViewStyle, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

interface Props {
  containerStyle?: ViewStyle;
  source: ImageSourcePropType;
  styleImage: ImageStyle;
};

const ChatUserImage: React.FunctionComponent<Props> = ({ source, containerStyle, styleImage }: Props) => {

  const [Modals, setModalVisible] = useState<boolean>(false);

  const handleModal = (visible: boolean): void => {
        setModalVisible(true);
  }

    return (
      <View style={[containerStyle]}>
        { Modals? <Modal
          animationType="fade"
          transparent={true}
          visible={Modals}
          onRequestClose={() => {alert('Modal');}}>
          <TouchableOpacity style={style.modalContainer} activeOpacity={1.0} onPress={() => {setModalVisible(false);}}>
            <View>
              <Image
                  style={[styleImage, {width: 250, height: 250, borderRadius: 0}]}
                  source={source}
                />
            </View>
          </TouchableOpacity>
        </Modal> : null }
        <TouchableOpacity onPress={() => {handleModal(true);}}>
          <Image
            style={styleImage}
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
      backgroundColor: 'rgba(0,0,0,0.5)'
  },
})
