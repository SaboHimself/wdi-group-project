import React from 'react'

// GET LOCATION DATA

class Step3 extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  render() {
    // console.log(this.props)
    if(this.props.currentStep !== 3) {
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
