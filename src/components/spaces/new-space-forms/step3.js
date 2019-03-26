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
        <button>Submit</button>
      </div>
    )
  }
}

export default Step3
