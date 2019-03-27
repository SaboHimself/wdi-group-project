import React from 'react'
import axios from 'axios'
import Auth from '../auth/userAuthentication'
import AdjustmentForm from './new-space-forms/adjustmentForm'

class EditSpace extends React.Component{
  constructor(){
    super()

    this.state = {
      data: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  componentDidMount(){
    axios.get(`/api/spaces/
        ${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.message))
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.put(`api/spaces/${this.props.match.params.id}`,
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/api/spaces'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  render(){
    return(
      <main>
        <div>
          <AdjustmentForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state.data}
            errors={this.state.errors}
          />
        </div>
      </main>
    )
  }
}
export default EditSpace
