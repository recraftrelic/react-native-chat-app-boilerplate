//todo need to refactor
import React, { useState } from 'react';
import { GestureResponderEvent, Image, ImageStyle, ImageSourcePropType, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle, TextInput } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import ChatUserImage from './ChatUserImage';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';
import ImagePicker from 'react-native-image-picker';

interface Props {
    userImageSource: ImageSourcePropType;
    userName: string;
    status: string;
    editInfo?: boolean;
    onButtonPress?: (event: GestureResponderEvent) => void
};

const ChatProfileInfo: React.FunctionComponent<Props> = ({
    userImageSource,
    userName,
    status,
    editInfo,
    onButtonPress
}: Props) => {
    const theme: AppTheme = useTheme();
    const [saveItem, setSaveItem] = useState<boolean>(false);
    const [image, onBrowseImage] = React.useState<ImageSourcePropType>(userImageSource);
    const [name, onChangeName] = React.useState<string>(userName);
    const [bio, onChangeBio] = React.useState<string>(status);

    const selectPhotoTapped = (): void => {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true,
        },
    };

    ImagePicker.showImagePicker(options, response => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = {uri: response.uri};
  
          onBrowseImage(source);
        }
      });
    }

    return (
        <View>
        <View style={style.container}>
            <TouchableOpacity onPress={onButtonPress}>
                <Icon name="ios-arrow-back" size={40} color={theme.textColor} style={style.backButton}/>
            </TouchableOpacity> 
            {
                editInfo && !saveItem ?
                    <TouchableOpacity onPress={() => {setSaveItem(true);}}>
                        <MaterialIcon name="account-edit" size={40} color={theme.textColor} style={style.editButton}/>
                    </TouchableOpacity> 
                : null
            }
            {
                editInfo && saveItem ?
                <View style={[style.container, {padding: 0}]}>
                    <TouchableOpacity onPress={() => {setSaveItem(false);}}>
                        <MaterialIcon name="check" size={40} color={theme.textColor} />
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => {setSaveItem(false);}}>
                        <EntypoIcon name="cross" size={40} color={theme.textColor} />
                    </TouchableOpacity>
                </View>
                :null
            }
        </View>
        <View style={style.contentContainer}>
            { !saveItem ?
                <ChatUserImage
                    source={image}
                    containerStyle={style.userImageContainer}
                    imageStyle={style.imageStyle}
                />
            :   <TouchableOpacity onPress={() => {selectPhotoTapped();}}>
                    <Image
                        source={image}
                        style={[style.imageStyle, {opacity: 0.5}]}
                    />
                    <EntypoIcon name="camera" size={40} color={theme.textColor} style={style.imageUpload}/>
                </TouchableOpacity> 
            }
        </View>
        <View style={style.contentContainer}>
            { !saveItem ?
                <ThemedText styleKey="textColor" style={style.userNameStyle}>{name}</ThemedText>
            :   <TextInput style={[style.userNameStyle, style.inputStyle, {borderColor: theme.lightBottomColor, color: theme.textColor}]} onChangeText={text => onChangeName(text)} value={name} />
            }
        </View>
        <View style={style.contentContainer}>
            { !saveItem ?
                <ThemedText styleKey="textColor" style={{fontStyle: "italic"}}>{bio}</ThemedText>
            :   <TextInput multiline style={[style.inputStyle, { height: 100, borderColor: theme.lightBottomColor, color: theme.textColor}]} onChangeText={text =>  onChangeBio(text)} value={bio} />
            }
        </View>
        </View>
    );
};

export default ChatProfileInfo;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    backButton: ViewStyle;
    editButton: ViewStyle;
    userImageContainer: ImageStyle;
    imageStyle: ImageStyle;
    imageUpload: ImageStyle;
    userNameStyle: TextStyle;
    inputStyle: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 15,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    backButton: {
        padding: 10,
        alignItems: "flex-start",
    },
    editButton: {
        padding: 10,
        alignItems: "flex-end",
    },
    userImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userNameStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    inputStyle: {
        borderWidth: 2, 
        padding: 10, 
    },
    imageStyle: {
        width: 100, 
        height: 100, 
        borderRadius: 50
    },
    imageUpload: {
        position: "absolute",
        top: 30,
        left: 30,
    }
})
