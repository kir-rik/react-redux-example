import { connect } from 'react-redux';
import { CHANGE_USERINFO, USERINFO_LOADING, USERINFO_LOADED, USERINFO_ERROR } from '../../../redux/actionTypes';
import getUserInfo from '../../../services/userInfo';
import userInfoPure from './userInfoPure';

const mapStateToProps = ({ userInfoSubstore }) => ({
  userInfo: userInfoSubstore.userInfo,
  isLoading: userInfoSubstore.isLoading,
  error: userInfoSubstore.error,
});

const actionCreator = (anyCallbackArgs) => (dispatch) => {
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

const mapDispatchToProps = (dispatch) => ({
  loadUserInfo: (anyCallbackArgs) => dispatch(actionCreator(anyCallbackArgs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(userInfoPure);
