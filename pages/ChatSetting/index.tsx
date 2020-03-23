import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import ChatProfileInfo from '../../components/Chat/ChatProfileInfo';
import ThemeToggle from '../../components/Chat/ThemeToggle';
import ChatVersion from '../../components/Chat/ChatVersion';
import { ThemeKey } from '../../config/themes';
import { TouchableOpacity, View, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import ThemedText from '../../components/UI/ThemedText';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import useConstants from '../../hooks/useConstants';
import { settingConstant } from './constants.';
import ModalDropdown from 'react-native-modal-dropdown';

interface Props extends RouteComponentProps {
    dispatch: Dispatch
}  

const ChatSetting: React.FunctionComponent<Props> = ({
    dispatch,
    history
}: Props) => {
    const theme: AppTheme = useTheme();
    const constants: AppConstants = useConstants();
    const goBack = () => {
        history.goBack()
    } 
    const goToLogin = () => {
        history.push('/')
    }
    const updateTheme = (theme: ThemeKey) => {
        dispatch(setThemeAction(theme))
    }

    const {userName, userInfo, appVersion} = settingConstant;

    const languages = ['English','French','Spanish','German','Chinese'];

    return (
        <>
        <ChatProfileInfo
          userImageSource={constants.appLogo}
          userName={userName}
          status={userInfo}
          onButtonPress={goBack}
          editInfo={true}
        />
        <View style={[style.container, {borderWidth: 0}]}>
            <View style={style.leftContainer}>
                <ThemedText styleKey="textColor">Default Language</ThemedText>
            </View>
            <View style={style.rightContainer}>
                <ModalDropdown options={languages} defaultValue = 'English' animated={true} textStyle={style.listStyle} dropdownStyle={style.downStyle} dropdownTextStyle={style.languageStyle}/>
            </View>
        </View>
        <ThemeToggle updateTheme={updateTheme} />
        <TouchableOpacity onPress={goToLogin}>
            <View style={[style.container, {borderColor: theme.lightBottomColor}]}>
                <View style={style.leftContainer}>
                <ThemedText styleKey="textColor">{constants.logoutButton}</ThemedText>
                </View>
                <View style={style.rightContainer}>
                    <MaterialIcon name="logout" size={30} color={theme.warningColor} />   
                </View>
            </View>
        </TouchableOpacity>
        <ChatVersion name={appVersion} />
        </>
    );
}

export default connect(({ dispatch}) => ({ dispatch }))(ChatSetting);

interface Style {
    container: ViewStyle;
    leftContainer: ViewStyle;
    rightContainer: ViewStyle;
    languageStyle: TextStyle;
    listStyle: TextStyle;
    downStyle: ViewStyle;
  }
  
const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
      },  
    leftContainer: {
      alignItems: "flex-start",
    },
    rightContainer: {
      alignItems: "flex-end",
    },
    languageStyle: {
      fontSize: 16,
    },
    listStyle: {
      fontSize: 14,
    },
    downStyle: {
        width: 150,
    }
});
