export interface AppState {
  counter: number;
}

const initialState: AppState = {
  counter: 0,
};

const rootReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
