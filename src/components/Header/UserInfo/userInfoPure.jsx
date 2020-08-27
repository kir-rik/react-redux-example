import React from 'react';
import getUserInfo from '../../../services/userInfo';
import styles from './styles';

export default class UserInfo extends React.PureComponent {
  state = {};

  componentDidMount() {
    getUserInfo().then((userInfo) => this.setState(userInfo));
  }

  render() {
    const { userName, age, location, picUrl } = this.state;
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
