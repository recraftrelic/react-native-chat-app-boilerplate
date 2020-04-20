import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UserItem from '../../components/Chat/UserItem';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { AppTheme } from '../../config/DefaultConfig';
import { chatUsers } from './constants';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../../components/UI/ThemedText';
import useLanguage from '../../hooks/useLanguage';
import { AppLanguage } from '../../config/languages';

interface Props extends RouteComponentProps {
  dispatch: Dispatch
}

const ChatUsers: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const theme: AppTheme = useTheme();
  const constants: AppLanguage = useLanguage();
  const [option,setOption] = useState<Boolean>(false);
  const goToChatDetails = () => {
    history.push('/chat')
  }

  const goToBack = () => {
    history.goBack();
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
              <ThemedText styleKey="textColor" style={style.userNameStyle}>{constants.newChat}</ThemedText>
              <ThemedText styleKey="textColor" style={{paddingLeft: 37}}>{constants.selectUser}</ThemedText>
            </TouchableOpacity> 
          </View>
        </View>
        <View style={[style.topContentContainer, {justifyContent: 'center'}]}>
          <Icon name="ios-search" size={20} color={theme.lightTextColor} />
        </View>
      </View>
      <ScrollView>
        {
          chatUsers.map((data, index) => {
            return (
              <UserItem
                key={index}
                userImageSource={{ uri: data.image }}
                userName={data.name}
                status={data.status}
                selectItem={() => setOption(true)}
              />
            )
          })
        }
      </ScrollView>
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

export default connect(({ dispatch}) => ({ dispatch }))(ChatUsers);

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    contentIcons: ViewStyle;
    contentMaterialIcons: ViewStyle;
    topContentContainer: ViewStyle;
    extraStyle: ViewStyle;
    userNameStyle: TextStyle;
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
