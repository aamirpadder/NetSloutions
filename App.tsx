/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import {AuthStack} from './src/routes/screenStacks';
import { colors } from './src/utils/constants';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:colors.APP_COLOR}}>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator size={'small'} />}
          persistor={persistor}>
          <AuthStack />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
