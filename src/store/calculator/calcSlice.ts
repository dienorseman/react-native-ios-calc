import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface CalcState {
  currentValue: string;
  previousValue: number | null;
  operator: string | null;
  waitingForNewValue: boolean;
}

const initialState: CalcState = {
  currentValue: '0',
  previousValue: null,
  operator: null,
  waitingForNewValue: false,
};

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    clear: state => {
      state.currentValue = '0';
      state.previousValue = null;
      state.operator = null;
      state.waitingForNewValue = false;
    },
    addDigit: (state, action: PayloadAction<string>) => {
      console.log('length', state.currentValue.length);

      if (action.payload === '.' && state.currentValue.includes('.')) {
        return;
      }
      if (state.currentValue === '0' && action.payload !== '.') {
        return {
          ...state,
          currentValue: action.payload.toString(),
        };
      } else {
        return {
          ...state,
          currentValue: state.currentValue + action.payload.toString(),
        };
      }
    },
    setOperator: (state, action: PayloadAction<string>) => {
      state.operator = action.payload;
      state.previousValue = parseFloat(state.currentValue);
      state.waitingForNewValue = true;
    },
  },
});

export const {clear, addDigit, setOperator} = calcSlice.actions;
export default calcSlice.reducer;
