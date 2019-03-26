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
          Description
        </label>
        <textarea
          placeholder="description"
          name="description"
          onChange={this.props.handleChange}
          value={this.props.description}
        />
        <button>Submit</button>
      </div>
    )
  }
}

export default Step2
