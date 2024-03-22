import { configureStore} from "@reduxjs/toolkit";
import ceoSlice from "./redux_toolkit/ceoSlice"; // Import Redux Thunk middleware

const store = configureStore({
  reducer: {
    ceo: ceoSlice,
  }, 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
