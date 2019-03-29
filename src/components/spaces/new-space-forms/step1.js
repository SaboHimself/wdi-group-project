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
      <div className="step1">
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
            id="c1"
            type="radio"
            name="electricChargingPoint"
            value={true}
            onChange={this.props.handleChargeRadio}
          />
          <label htmlFor="c1"><span></span>True </label>
          <input
            id="c2"
            type="radio"
            name="electricChargingPoint"
            value={false}
            onChange={this.props.handleChargeRadio}
          />
          <label htmlFor="c2"><span></span>False </label>
        </div>
      </div>
    )
  }
}

export default Step2
