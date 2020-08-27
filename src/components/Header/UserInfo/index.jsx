import { connect } from "react-redux";
import { CHANGE_USERINFO } from '../../../redux/actionTypes';
import getUserInfo from '../../../services/userInfo';
import userInfoPure from './userInfoPure';

const mapStateToProps = ({ userInfoSubstore }) => ({ userInfo: userInfoSubstore.userInfo })

const mapDispatchToProps = {
    updateUserInfo: (value) => ({
      type: CHANGE_USERINFO,
      payload: {
        userInfo: value,
      },
    }),
  }

export default connect(mapStateToProps, mapDispatchToProps)(userInfoPure);
