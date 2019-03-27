import React from 'react'
import Select from 'react-select'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import Auth from '../../auth/userAuthentication'

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

// const electricChargingOptions = [
//   { value: true, label: 'Yes' },
//   { value: false, label: 'No' }
// ]

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

    // this.handleChange = this.handleChange.bind(this)
    this.handleTypeSelect = this.handleTypeSelect.bind(this)
    this.handleSuitabilitySelect = this.handleSuitabilitySelect.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount() {
  //   console.log(this.props)
  //   axios.get(`/api/spaces/${this.props.match.params.id}`)
  //     .then(res => this.setState({ data: res.data }))
  //     .catch(err => console.log(err.message))
  // }

  // handleChange({ target: {name, value}}) {
  //   const data = {...this.state.data, [name]: value}
  //   this.setState({ data })
  // }

  handleTypeSelect({ value }) {
    const data = { ...this.state.data, type: value }
    this.setState({ data })
  }

  handleSuitabilitySelect({ value }) {
    const data = { ...this.state.data, suitability: value }
    this.setState({ data })
  }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   console.log('data is', this.state.data)
  //   axios.put(`/api/spaces/${this.props.match.params.id}`, this.state.data, { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
  //     .then(() => this.props.history.push('/spaces'))
  //     .catch(err => console.log(err.response.data.errors))
  // }

  render(){
    // console.log(this.state.data)
    const { data, handleSubmit, handleChange } = this.props
    console.log(data)
    return(
      <div>
        <form onSubmit={handleSubmit}>
          <label>
          Type
          </label>
          <Select
            name="type"
            options={typeOptions}
            onChange={this.handleTypeSelect}
            value={{value: data.type, label: data.type}}
          />
          <label>
          Suitability
          </label>
          <Select
            name="suitability"
            options={suitabilityOptions}
            onChange={this.handleSuitabilitySelect}
            value={!data || {value: data.suitability, label: data.suitability}}
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
            onChange={handleChange}
            value={!data || data.price}
          />
          <label>
          Description
          </label>
          <textarea
            rows="10"
            columns="90"
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={!data || data.description}
          />
          <button className="button is-danger">Confirm</button>
        </form>
      </div>
    )
  }

}
export default AdjustmentForm
