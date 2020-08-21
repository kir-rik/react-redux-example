import usernameInputPure from './usernameInputPure'

const mapDispatchToProps = {
  handleChange: value => ({
    userName: value
  })
} 

export default connect(undefined, mapDispatchToProps)(usernameInputPure)