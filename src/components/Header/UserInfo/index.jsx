import userInfoPure from './userInfoPure';

const mapStateToProps = (globalState) => ({ userName: globalState.userName });

// подкидываем пропс userName из глобального стора
export default connect(mapStateToProps)(userInfoPure); 
