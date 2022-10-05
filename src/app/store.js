import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../features/greeting/greetingReducer';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
