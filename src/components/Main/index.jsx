import React from 'react';
import PropTypes from 'prop-types';
import UserNameInput from './UsernameInput';
import styles from './styles';

const main = ({ handleChange }) => (
  <div className={styles.main}>
    <UserNameInput />
  </div>
);

export default main;
