import { connect } from "react-redux";
import userInfoPure from './userInfoPure';

const mapStateToProps = ({ userInfoSubstore }) => ({ userName: userInfoSubstore.userName});

export default connect(mapStateToProps)(userInfoPure);
