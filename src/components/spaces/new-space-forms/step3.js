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
      <div className="step3">
        <button
          className="button"
          type="button"
          onClick={this.props.handlePhotoModal}>Upload a Photo</button>
        <button className="button">Submit</button>
        <div className="errors">

          {this.props.errors.type && <div><small className="danger">Type is required</small></div>}
          {this.props.errors.price && <div><small className="danger">Price is required</small></div>}
          {this.props.errors.suitability && <div><small className="danger">Suitability is required</small></div>}
          {this.props.errors.description && <div><small className="danger">Description is required</small></div>}
        </div>
      </div>
    )
  }
}

export default Step3
