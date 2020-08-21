import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import styles from './styles';

const header = ({ userName }) => (
  <div className={styles.header}>
    <UserInfo userName={userName} />
  </div>
);

header.propTypes = {
  userName: PropTypes.string,
};

export default header;
