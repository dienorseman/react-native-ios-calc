import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface CalcState {
  displayValue: string;
  storedValue: number | null;
  operator: string | null;
  waitingForNewValue: boolean;
  firstNumber: number | null;
  secondNumber: number | null;
}

const initialState: CalcState = {
  displayValue: '0',
  storedValue: 0,
  operator: null,
  waitingForNewValue: false,
  firstNumber: null,
  secondNumber: null,
};

export const calcSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    clear: () => initialState,
    addDigit: (state, action: PayloadAction<string>) => {
      if (
        (action.payload === '.' && state.displayValue.includes('.')) ||
        state.displayValue.length > 9
      ) {
        return;
      } else if (state.displayValue === '0' && action.payload === '0') {
        state.displayValue = '0';
      } else {
        if (state.waitingForNewValue) {
          state.displayValue = action.payload;
          state.waitingForNewValue = false;
          return;
        }
        state.displayValue += action.payload;
        if (
          state.displayValue[0] === '0' &&
          !state.displayValue.includes('.')
        ) {
          state.displayValue = state.displayValue.slice(1);
        }
      }
    },
    setOperator: (state, action: PayloadAction<string>) => {
      if (state.operator && state.storedValue) {
        if (!state.secondNumber) {
          state.secondNumber = Number(state.displayValue);
        }
        switch (state.operator) {
          case '+':
            state.storedValue = state.firstNumber! + state.secondNumber!;
            break;
          case '-':
            state.storedValue = state.firstNumber! - state.secondNumber!;
            break;
          case 'X':
            state.storedValue = state.firstNumber! * state.secondNumber!;
            break;
          case '/':
            state.storedValue = state.firstNumber! / state.secondNumber!;
            break;
          default:
            return;
        }
        state.displayValue = String(state.storedValue);
        state.firstNumber = state.storedValue;
        state.waitingForNewValue = true;
        state.storedValue = null;
      } else {
        state.waitingForNewValue = true;
        state.firstNumber = Number(state.displayValue);
        state.operator = action.payload;
        state.storedValue = state.firstNumber;
      }
    },
    plusMinus: state => {
      state.displayValue = String(Number(state.displayValue) * -1);
    },
    percent: state => {
      state.displayValue = String(Number(state.displayValue) / 100);
    },
    equals: state => {
      if (!state.secondNumber) {
        state.secondNumber = Number(state.displayValue);
      }
      switch (state.operator) {
        case '+':
          state.storedValue = state.firstNumber! + state.secondNumber!;
          break;
        case '-':
          state.storedValue = state.firstNumber! - state.secondNumber!;
          break;
        case 'X':
          state.storedValue = state.firstNumber! * state.secondNumber!;
          break;
        case '/':
          state.storedValue = state.firstNumber! / state.secondNumber!;
          break;
      }
      state.waitingForNewValue = false;
      state.displayValue = String(state.storedValue);
      state.firstNumber = state.storedValue;
    },
  },
});

export const {clear, addDigit, setOperator, plusMinus, percent, equals} =
  calcSlice.actions;
export default calcSlice.reducer;
