import React from 'react'

// GET LOCATION DATA

class Step3 extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  render() {
    if(this.props.currentStep !== 3) {
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
        <button>Submit</button>
      </div>
    )
  }
}

export default Step3
