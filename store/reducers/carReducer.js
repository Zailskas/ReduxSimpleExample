const initialState = {
  cars: [],
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return {
        cars: [...state.cars],
      };
    case 'ADD_CAR':
      return {
        cars: [
          ...state.cars,
          {
            make: action.make,
            model: action.model,
            id: action.id,
          },
        ],
      };
    default:
      return state;
  }
};
