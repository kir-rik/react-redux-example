import React from 'react';
import PropTypes from 'prop-types';
import getUserInfo from '../../../services/userInfo';
import isEmpty from '../../../utils/isEmpty';
import Spinner from '../../Spinner';
import styles from './styles';

export default class UserInfo extends React.PureComponent {
  static propTypes = {
    updateUserInfo: PropTypes.func,
    userInfoLoading: PropTypes.func,
    userInfoLoaded: PropTypes.func,
    userInfoError: PropTypes.func,
    userInfo: PropTypes.shape({
      userName: PropTypes.string,
      age: PropTypes.string,
      location: PropTypes.string,
      picUrl: PropTypes.string,
    }),
  };

  constructor(props) {
    super(props);

    if (isEmpty(props.userInfo) && !this.props.isLoading) {
      props.userInfoLoading();
      getUserInfo()
        .then((data) => {
          props.updateUserInfo(data);
          props.userInfoLoaded();
        })
        .catch(() => props.userInfoError());
    }
  }

  render() {
    const { userInfo: { userName, age, location, picUrl } = {}, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

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
