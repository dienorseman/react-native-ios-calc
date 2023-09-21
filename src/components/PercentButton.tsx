import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {styles} from '../theme/AppTheme';
import {AppDispatch} from '../store/store';
import {percent} from '../store/calculator/calcSlice';

export const PercentButton = () => {
  const dispatch = AppDispatch();

  return (
    <TouchableHighlight
      style={styles.clearButton}
      onPress={() => {
        dispatch(percent());
      }}>
      <View>
        <Text style={styles.specialButtonNumber}>%</Text>
      </View>
    </TouchableHighlight>
  );
};
