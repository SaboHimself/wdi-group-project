import React from 'react'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data ={...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <label>
        Username
          <input
            onChange={ this.handleChange }
            name="username"
            value={ this.state.data.username }
          />
        </label>
        <label>
        Email
          <input
            onChange={ this.handleChange }
            name="email"
            value={ this.state.data.email }
          />
        </label>
        <label>
        Password
          <input
            onChange={ this.handleChange }
            type="password"
            name="password"
            value={ this.state.data.password }
          />
        </label>
        <label>
        Password Confirmation
          <input
            onChange={ this.handleChange }
            type="password"
            name="passwordConfirmation"
            value={ this.state.data.passwordConfirmation }
          />
        </label>
        <button>Login</button>
      </form>
    )
  }
}

export default Register
