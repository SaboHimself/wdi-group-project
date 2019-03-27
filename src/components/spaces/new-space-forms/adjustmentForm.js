import React from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../auth/userAuthentication'

const typeOptions = [
  { value: 'On Road', label: 'On Road' },
  { value: 'Off Road', label: 'Off Road' },
  { value: 'Drive', label: 'Drive' },
  { value: 'Garage', label: 'Garage' }
]

const suitabilityOptions = [
  { value: 'Car', label: 'Car' },
  { value: 'Van', label: 'Van' },
  { value: 'Bike', label: 'Bike' }
]

const electricChargingOptions = [
  { value: true, label: 'Yes' },
  { value: false, label: 'No' }
]

class AdjustmentForm extends React.Component{
  constructor() {
    super()

    this.state = {
      type: '',
      suitability: '',
      description: '',
      electricChargingPoint: false,
      price: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleTypeSelect = this.handleTypeSelect.bind(this)
    this.handleSuitabilitySelect = this.handleSuitabilitySelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

componentDidMount() {
  axios.get(`/api/spaces/${this.props.match.params.id}`)
    .then(res => this.setState({ data: res.data }))
    .catch(err => console.log(err.message))
}

handleChange({ target: {name, value}}) {
  const data = {...this.state.data, [name]: value}
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

  handleSubmit(e) {
    e.preventDefault()
    console.log('data is', this.state.data)
    axios.put(`/api/spaces/${this.props.match.params.id}`, this.state.data, { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
    .then(() => this.props.history.push('/spaces'))
.   catch(err => console.log(err.response.data.errors))
  }

  render(){
    console.log(this.state.data);
    return(
      <div>
      <form onSubmit={this.handleSubmit}>

      <label>
          Type
        </label>
        <Select
          name="type"
          options={typeOptions}
          onChange={this.handleTypeSelect}
          handleChange={this.handleChange}
          value={!this.state.data || {value: this.state.data.type, label: this.state.data.type}}
        />
        <label>
          Suitability
        </label>
        <Select
          name="suitability"
          options={suitabilityOptions}
          onChange={this.handleTypeSelect}
          handleSuitabilitySelect={this.handleSuitabilitySelect}
          value={!this.state.data || {value: this.state.data.suitability, label: this.state.data.suitability}}
        />
        <label>
          Electric Charging Point
        </label>
        <div>
          <input
            type="radio"
            name="yes"
            value="true"
          />
          <input
            type="radio"
            name="no"
            value="false"
          />
        </div>

        <label>
        Price
        </label>
        <input
          name="price"
          onChange={this.handleChange}
          handleSuitabilitySelect={this.handleSuitabilitySelect}
          value={!this.state.data || this.state.data.price}
        />
        <label>
          Description
        </label>
        <textarea
          rows="10"
          columns="90"
          placeholder="description"
          name="description"
          onChange={this.handleChange}
          value={!this.state.data || this.state.data.description}
        />

          <button className="button is-danger" onClick={this.handleSubmit}
          >Confirm</button>

        </form>
      </div>
    )
  }

}
export default AdjustmentForm
