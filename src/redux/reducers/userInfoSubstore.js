import { CHANGE_USERNAME } from '../actionTypes';

// Substore USER_INFO:
const initialState = {
  userName: '' 
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME: {
      const { userName } = action.payload;

      return {
        ...state,
        userName
      };
    }

    default:
      return state;
  }
}
