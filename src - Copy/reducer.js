export const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return ([...state, action.user])
    case 'OK':
      return ([...state.filter((_, i) => (i !== action.index))]);
    default:
      return state;
  }
};

export default userReducer;