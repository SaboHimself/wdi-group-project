import React from 'react'

// GET LOCATION DATA

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
        <input
          name="price"
          placeholder="Price"
          type="number"
          onChange={this.props.handleChange}
          value={this.props.price}
        />
        <label>
          Electric Charging Point
        </label>
        <div>
          <input
            type="radio"
            name="electricChargingPoint"
            value={true}
          />
          <input
            type="radio"
            name="electricChargingPoint"
            value={false}
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
      </div>
    )
  }
}

export default Step2
