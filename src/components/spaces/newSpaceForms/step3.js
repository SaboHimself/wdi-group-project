import React from 'react'

// GET LOCATION DATA

class Step3 extends React.Component{
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
        name="price"
        placeholder="Price"
        onChange={this.props.handleChange}
        value={this.props.price}
      />
    )
  }
}

export default Step3
