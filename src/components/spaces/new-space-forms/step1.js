import React from 'react'

// GET LOCATION DATA

class Step1 extends React.Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props)
    if(this.props.data.currentStep !== 1) {
      return null
    }

    const { data } = this.props
    return(
      <input
        name="location"
        placeholder="Location"
        onChange={this.props.handleChange}
        value={data.location}
      />
    )
  }
}

export default Step1
