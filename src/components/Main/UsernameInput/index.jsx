import userNameInputPure from './userNameInputPure';

const mapDispatchToProps = {
  handleChange: (value) => ({
    userName: value,
  }),
};

// подкидываем пропс handleChange, который будет складываться userName в стор
export default connect(undefined, mapDispatchToProps)(userNameInputPure);
