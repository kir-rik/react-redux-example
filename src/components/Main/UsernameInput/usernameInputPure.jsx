import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const userNameInput = ({ handleChange }) => (
  <input className={styles.input} onChange={e => handleChange(e.target.value)} placeholder="Введите имя пользователя" />
);

userNameInput.propTypes = {
  handleChange: PropTypes.func,
};

userNameInput.defaultProps = {
  handleChange: () => {},
};

export default userNameInput;
