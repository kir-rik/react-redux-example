import userInfoPure from './userInfoPure';

const mapStateToProps = (globalState) => ({ userName: globalState.userName });

export default connect(mapStateToProps)(userInfoPure);
