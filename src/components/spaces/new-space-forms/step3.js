import React from 'react'

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
        <button
          type="button"
          onClick={this.props.handlePhotoModal}>upload photo</button>
        <button>Submit</button>
      </div>
    )
  }
}

export default Step3
