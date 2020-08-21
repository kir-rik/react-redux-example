import { connect } from 'react-redux';
import { CHANGE_USERNAME } from '../../../redux/actionTypes';
import userNameInputPure from './userNameInputPure';

const mapDispatchToProps = {
  handleChange: (value) => ({
    type: CHANGE_USERNAME,
    payload: {
      userName: value,
    },
  }),
};

export default connect(undefined, mapDispatchToProps)(userNameInputPure);
