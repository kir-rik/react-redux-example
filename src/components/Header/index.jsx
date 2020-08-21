import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import styles from './styles';

const header = () => (
  <div className={styles.header}>
    <UserInfo />
  </div>
);

export default header;
