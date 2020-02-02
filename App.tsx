import React from 'react';
import Router from './router';
import ConfigContext from './config/AppConfigProvider';
import { defaultConfig } from './config/DefaultConfig';

const App: React.FunctionComponent = () => {
    return (
        <ConfigContext.Provider value={defaultConfig}>
            <Router />
        </ConfigContext.Provider>
    );
};

export default App;
