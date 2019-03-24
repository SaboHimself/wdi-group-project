import React from 'react'
import axios from 'axios'

import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'

class SpaceForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        currentStep: 1,
        location: '',
        type: '',
        suitability: '',
        description: '',
        electricChargingPoint: false,
        price: 0
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data ={...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/spaces', this.state.data)
      .then(res => console.log(res))
  }

  handleNext() {
    let currentStep = this.state.data.currentStep
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    const data = {...this.state.data, currentStep}
    this.setState({
      data
    })
  }

  handlePrev() {
    let currentStep = this.state.data.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    const data = {...this.state.data, currentStep}
    this.setState({
      data
    })
  }

  get previousButton(){
    const currentStep = this.state.data.currentStep

    if(currentStep !== 1){
      return (
        <button
          type="button"
          onClick={this.handlePrev}>
          Previous
        </button>
      )
    }
    return null
  }

  get nextButton(){
    const currentStep = this.state.data.currentStep

    if(currentStep < 3){
      return (
        <button
          type="button"
          onClick={this.handleNext}>
          Next
        </button>
      )
    }
    return null
  }

  render() {
    console.log(this.state.data)
    const { data } = this.state
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <p>Step {this.state.data.currentStep}</p>
          <Step1
            data={data}
            handleChange={this.handleChange}
          />
          <Step2
            currentStep={this.state.data.currentStep}
            handleChange={this.handleChange}
            type={this.state.data.type}
            suitability={this.state.data.suitability}
            description={this.state.data.description}
            electricChargingPoint={this.state.data.electricChargingPoint}
          />
          <Step3
            currentStep={this.state.data.currentStep}
            handleChange={this.handleChange}
            price={this.state.data.price}
          />
          {this.previousButton}
          {this.nextButton}
        </form>
      </React.Fragment>
    )
  }
}

export default SpaceForm
