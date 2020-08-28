import { CHANGE_USERINFO, USERINFO_LOADING, USERINFO_ERROR, USERINFO_LOADED } from '../actionTypes';

const initialState = {
  isLoading: false,
  error: false,
  userInfo: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERINFO: {
      const { userInfo } = action.payload;

      return {
        ...state,
        userInfo,
      };
    }

    case USERINFO_LOADING: {
      return { ...state, isLoading: true, error: false };
    }

    case USERINFO_LOADED: {
      return { ...state, isLoading: false, error: false };
    }

    case USERINFO_ERROR: {
      return { ...state, isLoading: false, error: true };
    }

    default:
      return state;
  }
}
