import userNameInputPure from './userNameInputPure'

const mapDispatchToProps = {
  handleChange: value => ({
    userName: value
  })
} 

export default connect(undefined, mapDispatchToProps)(userNameInputPure)