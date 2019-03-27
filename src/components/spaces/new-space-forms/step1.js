import React from 'react'
import Select from 'react-select'

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

class Step2 extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  render() {
    if(this.props.currentStep !== 1) {
      return null
    }
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
            name="electricChargingPoint"
            value={true}
            onChange={this.props.handleChargeRadio}
          />
          <input
            type="radio"
            name="electricChargingPoint"
            value={false}
            onChange={this.props.handleChargeRadio}
          />
        </div>
      </div>
    )
  }
}

export default Step2
