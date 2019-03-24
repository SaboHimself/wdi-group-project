import React from 'react'

// GET LOCATION DATA

class Step1 extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  render() {
    if(this.props.currentStep !== 1) {
      return null
    }

    return(
      <input
        name="location"
        placeholder="Location"
        onChange={this.props.handleChange}
        value={this.props.location}
      />
    )
  }
}

export default Step1
