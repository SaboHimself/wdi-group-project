import React from 'react'

class Login extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <form>
        <label>
        Email:
          <input/>
        </label>
        <label>
        Password:
          <input />
        </label>
      </form>
    )
  }
}

export default Login
