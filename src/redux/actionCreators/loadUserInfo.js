import getUserInfo from '../../services/userInfo';
import { CHANGE_USERINFO, USERINFO_LOADING, USERINFO_LOADED, USERINFO_ERROR } from '../actionTypes';

export default () => (dispatch) => {
    dispatch({
      type: USERINFO_LOADING,
    });
  
    getUserInfo()
      .then((data) => {
        dispatch({
          type: USERINFO_LOADED,
        });
        dispatch({
          type: CHANGE_USERINFO,
          payload: {
            userInfo: data,
          },
        });
      })
      .catch(() =>
        dispatch({
          type: USERINFO_ERROR,
        })
      );
  };