import React from 'react'
import axios from 'axios'
import Auth from '../auth/userAuthentication'
import AdjustmentForm from './new-space-forms/adjustmentForm'

class EditSpace extends React.Component{
  constructor(){
    super()

    this.state = {
      data: {
        type: '',
        suitability: '',
        description: '',
        electricChargingPoint: false,
        price: ''
      }
      // errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTypeSelect = this.handleTypeSelect.bind(this)
    this.handleSuitabilitySelect = this.handleSuitabilitySelect.bind(this)
  }
  componentDidMount(){
    axios.get(`/api/spaces/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    // const errors = {...this.state.errors, [name]: ''}
    this.setState({ data })
  }

  handleTypeSelect({ value }) {
    const data = { ...this.state.data, type: value }
    this.setState({ data })
  }

  handleSuitabilitySelect({ value }) {
    const data = { ...this.state.data, suitability: value }
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.props)
    axios.put(`/api/spaces/${this.props.match.params.id}`,
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then((res) => {
        console.log(res)
        this.props.history.push(`/spaces/${this.props.match.params.id}`)
      })
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  render(){
    if(!this.state.data) return null
    return(
      <div className="edit-wrapper">
        <AdjustmentForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleSuitabilitySelect={this.handleSuitabilitySelect}
          handleTypeSelect={this.handleTypeSelect}
          data={this.state.data}
        />
      </div>
    )
  }
}
// errors={this.state.errors}
export default EditSpace
