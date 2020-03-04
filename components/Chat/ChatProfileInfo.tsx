//todo need to refactor
import React, { useState } from 'react';
import { GestureResponderEvent, ImageStyle, ImageSourcePropType, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle, TextInput } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import ChatUserImage from './ChatUserImage';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';

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
    const [image, onBrowseImage] = React.useState(userImageSource);
    const [name, onChangeName] = React.useState(userName);
    const [bio, onChangeBio] = React.useState(status);

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
                imageStyle={{width: 100, height: 100, borderRadius: 50}}
                />
            :   <TouchableOpacity onPress={() => {onBrowseImage(image);}}>
                    <EntypoIcon name="upload" size={40} color={theme.textColor} />
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
    }
})
