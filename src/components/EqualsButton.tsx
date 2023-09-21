import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {styles} from '../theme/AppTheme';
import {AppDispatch} from '../store/store';
import {equals} from '../store/calculator/calcSlice';

export const EqualsButton = () => {
  const dispatch = AppDispatch();
  return (
    <TouchableHighlight
      style={styles.opperationButton}
      onPress={() => {
        dispatch(equals());
      }}>
      <View>
        <Text style={styles.opperandButtonNumber}>=</Text>
      </View>
    </TouchableHighlight>
  );
};
