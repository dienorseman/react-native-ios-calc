import {configureStore} from '@reduxjs/toolkit';
import {calcSlice} from './calculator/calcSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    calc: calcSlice.reducer,
  },
});

export const AppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
