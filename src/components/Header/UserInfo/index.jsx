import userInfoPure from './userInfoPure';

const mapStateToProps = (globalState) => ({ userInfo: globalState.userInfo });

export default connect(mapStateToProps)(userInfoPure);
