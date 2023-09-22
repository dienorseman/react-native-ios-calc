import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../store/store';
import {styles} from '../theme/AppTheme';
import {
  ClearButton,
  DigitNumberButton,
  EqualsButton,
  OperationButton,
  PercentButton,
  PlusMinusButton,
} from '../components';

export const CalculatorScreen = () => {
  // const {displayValue, operator, storedValue, firstNumber, secondNumber} =
  const {displayValue} = useAppSelector(state => state.calc);

  return (
    <>
      {/* <Text style={styles.currentOpperation}>
        {firstNumber} {operator} {secondNumber} = {storedValue}
      </Text> */}
      <Text style={styles.currentResult}>{displayValue}</Text>
      <View style={styles.row}>
        <ClearButton />
        <PlusMinusButton />
        <PercentButton />
        <OperationButton symbol="/" />
      </View>
      <View style={styles.row}>
        <DigitNumberButton number={7} />
        <DigitNumberButton number={8} />
        <DigitNumberButton number={9} />
        <OperationButton symbol="X" />
      </View>
      <View style={styles.row}>
        <DigitNumberButton number={4} />
        <DigitNumberButton number={5} />
        <DigitNumberButton number={6} />
        <OperationButton symbol="-" />
      </View>
      <View style={styles.row}>
        <DigitNumberButton number={1} />
        <DigitNumberButton number={2} />
        <DigitNumberButton number={3} />
        <OperationButton symbol="+" />
      </View>
      <View style={styles.row}>
        <DigitNumberButton zero number={0} />
        <DigitNumberButton number="." />
        <EqualsButton />
      </View>
    </>
  );
};
