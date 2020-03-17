import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import ChatProfileInfo from '../../components/Chat/ChatProfileInfo';
import ThemeToggle from '../../components/Chat/ThemeToggle';
import ChatVersion from '../../components/Chat/ChatVersion';
import { ThemeKey } from '../../config/themes';
import { TouchableOpacity, View, ViewStyle, StyleSheet } from 'react-native';
import ThemedText from '../../components/UI/ThemedText';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props extends RouteComponentProps {
    dispatch: Dispatch
}  

const ChatSetting: React.FunctionComponent<Props> = ({
    dispatch,
    history
}: Props) => {
    const theme: AppTheme = useTheme();
    const goBack = () => {
        history.goBack()
    } 
    const goToLogin = () => {
        history.push('/')
    }
    const updateTheme = (theme: ThemeKey) => {
        dispatch(setThemeAction(theme))
    }

    return (
        <>
        <ChatProfileInfo
          userImageSource={require(`../../app-logo.png`)}
          userName="Manoj Singh Negi"
          status="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          onButtonPress={goBack}
          editInfo={true}
        />
        <ThemeToggle updateTheme={updateTheme} />
        <TouchableOpacity onPress={goToLogin}>
            <View style={[style.container, {borderColor: theme.lightBottomColor}]}>
                <View style={style.leftContainer}>
                    <ThemedText styleKey="textColor">Logout</ThemedText>
                </View>
                <View style={style.rightContainer}>
                    <MaterialIcon name="logout" size={30} color={theme.warningColor} />   
                </View>
            </View>
        </TouchableOpacity>
        <ChatVersion name="Chat App Version: 2.0.1" />
        </>
    );
}

export default connect(({ dispatch}) => ({ dispatch }))(ChatSetting);

interface Style {
    container: ViewStyle;
    leftContainer: ViewStyle;
    rightContainer: ViewStyle;
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
  });
