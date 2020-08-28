import { connect } from 'react-redux';
import { CHANGE_USERINFO, USERINFO_LOADING, USERINFO_LOADED, USERINFO_ERROR } from '../../../redux/actionTypes';
import getUserInfo from '../../../services/userInfo';
import userInfoPure from './userInfoPure';

const mapStateToProps = ({ userInfoSubstore }) => ({
  userInfo: userInfoSubstore.userInfo,
  isLoading: userInfoSubstore.isLoading,
  error: userInfoSubstore.error,
});

const mapDispatchToProps = {
  updateUserInfo: (value) => ({
    type: CHANGE_USERINFO,
    payload: {
      userInfo: value,
    },
  }),
  userInfoLoading: () => ({
    type: USERINFO_LOADING,
  }),
  userInfoLoaded: () => ({
    type: USERINFO_LOADED,
  }),
  userInfoError: () => ({
    type: USERINFO_ERROR,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(userInfoPure);
