import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import Router from './router';
import ConfigContext from './config/AppConfigProvider';
import { defaultConfig } from './config/DefaultConfig';

const App: React.FunctionComponent = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ConfigContext.Provider value={defaultConfig}>
                <Router />
            </ConfigContext.Provider>
        </SafeAreaView>
    );
};

export default App;

interface Style {
    container: ViewStyle
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flex: 1
    }
})
