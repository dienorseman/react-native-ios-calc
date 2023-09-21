import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {styles} from '../theme/AppTheme';
import {AppDispatch} from '../store/store';
import {plusMinus} from '../store/calculator/calcSlice';

export const PlusMinusButton = () => {
  const dispatch = AppDispatch();

  return (
    <TouchableHighlight
      style={styles.clearButton}
      onPress={() => {
        dispatch(plusMinus());
      }}>
      <View>
        <Text style={styles.specialButtonNumber}>+/-</Text>
      </View>
    </TouchableHighlight>
  );
};
