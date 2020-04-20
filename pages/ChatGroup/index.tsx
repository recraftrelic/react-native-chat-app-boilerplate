import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, ViewStyle, TextStyle, Modal, TextInput, Dimensions } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UserItem from '../../components/Chat/UserItem';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { AppTheme } from '../../config/DefaultConfig';
import { chatGroups } from './constants';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../../components/UI/ThemedText';
import useLanguage from '../../hooks/useLanguage';
import { AppLanguage } from '../../config/languages';

interface Props extends RouteComponentProps {
  dispatch: Dispatch
}

const { height, width } = Dimensions.get('window')

const ChatGroup: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const theme: AppTheme = useTheme();
  const constants: AppLanguage = useLanguage();
  const [option,setOption] = useState<Boolean>(false);
  const [isModalsVisible, setModalVisible] = useState<boolean>(false);
  const goToChatDetails = () => {
    history.push('/chat')
  }

  const goToBack = () => {
    history.goBack();
  }

  const combine = () => {
    setModalVisible(false);
    setOption(true);
  }

  console.disableYellowBox = true;

  return (
    <>
      <View style={[style.container, {borderBottomColor: theme.lightBottomColor}]}>
        <TouchableOpacity onPress={goToBack}>
          <Icon name="ios-arrow-back" size={30} color={theme.textColor} style={style.contentIcons}/>
        </TouchableOpacity>  
        <View style={style.contentContainer}>
          <View style={style.topContentContainer}>
            <TouchableOpacity>
              <ThemedText styleKey="textColor" style={style.userNameStyle}>{constants.newGroup}</ThemedText>
              <ThemedText styleKey="textColor" style={{paddingLeft: 37}}>{constants.addParty}</ThemedText>
            </TouchableOpacity> 
          </View>
        </View>
        <View style={[style.topContentContainer, {justifyContent: 'center'}]}>
          <Icon name="ios-search" size={20} color={theme.lightTextColor} />
        </View>
      </View>
      <ScrollView>
        {
          chatGroups.map((data, index) => {
            return (
              <UserItem
                key={index}
                userImageSource={{ uri: data.image }}
                userName={data.name}
                status={data.status}
                selectItem={() => setModalVisible(true)}
              />
            )
          })
        }
      </ScrollView>
      { isModalsVisible ? 
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalsVisible}
          onRequestClose={() => {alert('Modal');}}>
          <TouchableOpacity style={[style.modalContainer, {backgroundColor: theme.highlightTextColor}]} activeOpacity={1.0} onPress={() => {combine()}}>
            <View style={{flexDirection: 'row', justifyContent: "space-between", paddingLeft: 20, paddingRight: 20}}>
              <View style={{alignItems: "flex-start", flex: 1, justifyContent: 'center'}}>
                <TextInput placeholder={constants.groupName} style={{padding: 10, width: 250, borderWidth: 1, borderColor: theme.lightBottomColor}}/>
              </View>
              <View style={{alignItems: "flex-end", flex: 1, justifyContent: 'center'}}>
                <Icon name="ios-checkmark-circle" size={30} color={theme.appColor}/>
              </View>
            </View>
          </TouchableOpacity>
        </Modal> 
        : null }
      {
        option ?
        <View style={[style.extraStyle, {backgroundColor: theme.appColor}]}>
        <TouchableOpacity onPress={goToChatDetails}>
          <Icon name="ios-arrow-forward" size={30} color={theme.highlightTextColor}/>
        </TouchableOpacity>
        </View>
        :
        null
      }
    </>
  );
};

export default connect(({ dispatch}) => ({ dispatch }))(ChatGroup);

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    contentIcons: ViewStyle;
    contentMaterialIcons: ViewStyle;
    topContentContainer: ViewStyle;
    extraStyle: ViewStyle;
    userNameStyle: TextStyle;
    modalContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
    },
    contentContainer: {
        flex: 17,
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingTop: 5,
    },
    contentIcons: {
        flex: 3,
        justifyContent: "space-between",
        paddingLeft: 5,
        paddingTop: 10,
    },
    contentMaterialIcons: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 3,
    },
    topContentContainer: {
        flexDirection: "column",
        alignItems: 'stretch',
    },
    userNameStyle: {
        fontWeight: "bold",
        fontSize: 18,
        paddingLeft: 37,
    },
    modalContainer: {
      flexDirection: 'column',
      justifyContent: "flex-start",
      alignItems: 'flex-start',
      width: width,
      height: height,
      paddingTop: 70,
    },
    extraStyle: {
        position: 'absolute', 
        right: 20, 
        bottom:30, 
        width: 50, 
        height: 50, 
        borderRadius: 50, 
        paddingTop: 10, 
        paddingLeft: 20
    }
})
