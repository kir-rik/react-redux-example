import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const usernameInput = ({ handleChange }) => (
  <input className={styles.input} onChange={e => handleChange(e.target.value)} placeholder="Введите имя пользователя" />
);

usernameInput.propTypes = {
  handleChange: PropTypes.func,
};

usernameInput.defaultProps = {
  handleChange: () => {},
};

export default usernameInput;
