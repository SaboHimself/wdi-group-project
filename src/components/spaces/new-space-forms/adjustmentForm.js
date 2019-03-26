import React from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

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


  render(){
    return(
      <div>
        <label>
          Type
        </label>
        <Select
          name="type"
          options={typeOptions}
          onChange={this.props.handleTypeSelect}
          value={!this.props.type || {value: this.props.type, label: this.props.type}}
        />
        <label>
          Suitability
        </label>
        <Select
          name="suitability"
          options={suitabilityOptions}
          onChange={this.props.handleSuitabilitySelect}
          value={!this.props.suitability || {value: this.props.suitability, label: this.props.suitability}}
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
          Description
        </label>
        <textarea
          placeholder="description"
          name="description"
          onChange={this.props.handleChange}
          value={this.props.description}
        />
        <Link to='"/spaces/:id"'>
          <button className="button is-danger">Confirm</button>
        </Link>
      </div>
    )
  }
}
export default AdjustmentForm
