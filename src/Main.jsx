import React from 'react';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {CalculatorScreen} from './screens/CalculatorScreen';
import {SafeAreaView} from 'react-native';
import {styles} from './theme/AppTheme';

export const Main = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.background}>
        <CalculatorScreen />
      </SafeAreaView>
    </Provider>
  );
};
