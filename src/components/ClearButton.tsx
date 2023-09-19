import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {styles} from '../theme/AppTheme';
import {AppDispatch} from '../store/store';
import {clear} from '../store/calculator/calcSlice';

export const ClearButton = () => {
  const dispatch = AppDispatch();

  return (
    <TouchableHighlight
      style={styles.clearButton}
      onPress={() => {
        dispatch(clear());
      }}>
      <View>
        <Text style={styles.opperandButtonNumber}>AC</Text>
      </View>
    </TouchableHighlight>
  );
};
