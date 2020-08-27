import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const userNameInput = ({ handleChange }) => {
  const handler = (e) => handleChange(e.target.value);

  return <input className={styles.input} onChange={handler} placeholder="Введите имя пользователя" />;
};

userNameInput.propTypes = {
  handleChange: PropTypes.func,
};

userNameInput.defaultProps = {
  handleChange: () => {},
};

export default userNameInput;
