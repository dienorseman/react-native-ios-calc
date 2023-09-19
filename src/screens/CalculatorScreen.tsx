import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../store/store';
import {styles} from '../theme/AppTheme';
import {DigitNumberButton} from '../components/DigitNumberButton';
import {ClearButton} from '../components/ClearButton';
import {OperationButton} from '../components/OperationButton';

export const CalculatorScreen = () => {
  const {currentValue, operator} = useAppSelector(state => state.calc);
  return (
    <>
      <Text style={styles.currentOpperation}>{operator}</Text>
      <Text style={styles.currentResult}>{currentValue}</Text>
      <View style={styles.row}>
        <ClearButton />
        <ClearButton />
        <ClearButton />
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
        <OperationButton symbol="=" />
      </View>
    </>
  );
};
