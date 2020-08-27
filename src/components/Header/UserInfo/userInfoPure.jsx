import React from 'react';
import PropTypes from 'prop-types';
import getUserInfo from '../../../services/userInfo';
import styles from './styles';

export default class UserInfo extends React.PureComponent {
  static propTypes = {
    updateUserInfo: PropTypes.func,
    userInfo: PropTypes.shape({
      userName: PropTypes.string,
      age: PropTypes.string,
      location: PropTypes.string,
      picUrl: PropTypes.string,
    }),
  };

  constructor(props) {
    super(props);

    getUserInfo().then(props.updateUserInfo);
  }

  render() {
    const { userInfo: { userName, age, location, picUrl } = {} } = this.props;

    return (
      <div className={styles.row}>
        <img src={picUrl} className={styles.pic} />
        <div className={styles.column}>
          <div>Имя пользователя: {userName}</div>
          <div>Возраст: {age} лет</div>
          <div>Из {location}</div>
        </div>
      </div>
    );
  }
}
