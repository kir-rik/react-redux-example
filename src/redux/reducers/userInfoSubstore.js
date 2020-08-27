import { CHANGE_USERINFO } from '../actionTypes';

// Substore USER_INFO:
const initialState = {
  userInfo: {}
};

export default function (state = initialState, action) {
  switch (action.type) {    
    case CHANGE_USERINFO: {
      const { userInfo } = action.payload;

      return {
        ...state,
        userInfo
      };
    }

    default:
      return state;
  }
}
