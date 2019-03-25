import React from 'react'
import Select from 'react-select'

const typeOptions = [
  { value: 'drive', label: 'Drive' },
  { value: 'off-road', label: 'Off Road' },
  { value: 'garage', label: 'Garage' }
]

const suitabilityOptions = [
  { value: 'car', label: 'Car' },
  { value: 'van', label: 'Van' },
  { value: 'bike', label: 'Bike' }
]

class Step2 extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  render() {
    if(this.props.currentStep !== 2) {
      return null
    }

    return(

      <div>
        <Select
          name="type"
          options={typeOptions}
          onChange={this.props.handleTypeSelect}
          value={this.props.type}
        />
        <Select
          name="suitability"
          options={suitabilityOptions}
          onChange={this.props.handleSuitabilitySelect}
        />
        <textarea
          placeholder="description"
          name="description"
          onChange={this.props.handleChange}
          value={this.props.description}
        />
      </div>
    )
  }
}

export default Step2

// <input
//   name="electricChargingPoint"
//   placeholder="Electric Charging"
//   onChange={this.props.handleChange}
//   value={this.props.electricChargingPoint}
// />
