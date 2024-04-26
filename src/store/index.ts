import CONFIG from '@/config';
import { Middleware, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector, useStore } from 'react-redux';
import globalReducer, { State as GlobalState } from './GlobalSlice';

const loggingMiddleware: Middleware = (store) => (next) => (action) => {
  if (CONFIG.env === 'local'){
    console.log('Action:', action);
  }
  return next(action);
};

export const makeStore = () => {
  return configureStore({
    reducer: {
      global: globalReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggingMiddleware),
  })
}
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
  global: GlobalState;
}
export type AppDispatch = AppStore['dispatch']

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore