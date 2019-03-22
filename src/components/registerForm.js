import React from 'react'

class Register extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <form>
        <label>
        Username
          <input/>
        </label>
        <label>
        Email
          <input/>
        </label>
        <label>
        Password
          <input />
        </label>
        <label>
        Password Confirmation
          <input />
        </label>
      </form>
    )
  }
}

export default Register
