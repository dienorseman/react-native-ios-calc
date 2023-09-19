import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {styles} from '../theme/AppTheme';
import {AppDispatch} from '../store/store';
import {addDigit} from '../store/calculator/calcSlice';

interface Props {
  number: number | string;
  zero?: boolean;
}

export const DigitNumberButton = ({number, zero}: Props) => {
  const dispatch = AppDispatch();

  return (
    <TouchableHighlight
      style={zero ? styles.zeroButton : styles.opperandButton}
      onPress={() => {
        dispatch(addDigit(number.toString()));
      }}>
      <View>
        <Text
          style={zero ? styles.zeroButtonNumber : styles.opperandButtonNumber}>
          {number}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
