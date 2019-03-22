import React from 'react'
import axios from 'axios'
import Auth from './userAuthentication'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
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
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <label>
        Email
          <input
            onChange={ this.handleChange }
            name="email"
            type="email"
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
        <button>Login</button>
      </form>
    )
  }
}

export default Login
