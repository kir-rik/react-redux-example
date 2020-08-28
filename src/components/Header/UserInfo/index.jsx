import { connect } from 'react-redux';
import loadUserInfo from '../../../redux/actionCreators/loadUserInfo';
import userInfoPure from './userInfoPure';

export const mapStateToProps = ({ userInfoSubstore }) => ({
  userInfo: userInfoSubstore.userInfo,
  isLoading: userInfoSubstore.isLoading,
  error: userInfoSubstore.error,
});

export const mapDispatchToProps = (dispatch) => ({
  loadUserInfo: (anyCallbackArgs) => dispatch(loadUserInfo(anyCallbackArgs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(userInfoPure);
