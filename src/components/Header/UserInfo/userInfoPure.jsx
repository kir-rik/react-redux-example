import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const userInfo = ({ userName }) => (
  <div className={styles.userInfo}>
    <div>Имя пользователя:</div>
    <div>{userName || 'Барабаш'}</div>
  </div>
);

userInfo.propTypes = {
  userName: PropTypes.string,
};

export default userInfo;
