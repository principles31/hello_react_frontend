import { configureStore } from '@reduxjs/toolkit';
import GreetingsReducer from './ReducerFunction';

const store = configureStore({
  reducer: {
    greetings: GreetingsReducer,
  },
});

export default store;
