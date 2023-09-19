import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {styles} from '../theme/AppTheme';
import {AppDispatch, useAppSelector} from '../store/store';
import {setOperator} from '../store/calculator/calcSlice';

interface Props {
  symbol: string;
}

export const OperationButton = ({symbol}: Props) => {
  const {operator, waitingForNewValue} = useAppSelector(state => state.calc);
  const dispatch = AppDispatch();

  return (
    <TouchableHighlight
      style={
        operator === symbol && waitingForNewValue
          ? styles.opperationButtonActive
          : styles.opperationButton
      }
      onPress={() => {
        dispatch(setOperator(symbol));
      }}>
      <View>
        <Text
          style={
            operator === symbol && waitingForNewValue
              ? styles.OperationButtonTextActive
              : styles.opperandButtonNumber
          }>
          {symbol}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
