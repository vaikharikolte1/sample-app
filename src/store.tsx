import { createStore } from "redux";
import rootReducer from "./Reducers";

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
