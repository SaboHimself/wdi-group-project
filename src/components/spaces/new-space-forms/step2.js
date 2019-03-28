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
      <div className="step2">
        <input
          name="price"
          placeholder="Price"
          type="number"
          onChange={this.props.handleChange}
          value={this.props.price}
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

// <label>
//   Description
// </label>
export default Step2
