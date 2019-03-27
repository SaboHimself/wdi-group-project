import React from 'react'
import axios from 'axios'
import * as filestack from 'filestack-js'

import Auth from '../../auth/userAuthentication'
import Map2 from './spacemap'

import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'

const client = filestack.init('A4TDqBlHpRmZTAuIpcMYJz')

class SpaceForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        currentStep: 1,
        geometry: {
          type: 'Point',
          coordinates: []
        },
        type: '',
        suitability: '',
        description: '',
        electricChargingPoint: false,
        price: '',
        images: ''
      },
      image: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleTypeSelect = this.handleTypeSelect.bind(this)
    this.handleSuitabilitySelect = this.handleSuitabilitySelect.bind(this)
    this.handleChargeRadio = this.handleChargeRadio.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleGeometryChange = this.handleGeometryChange.bind(this)
    this.handlePhotoModal = this.handlePhotoModal.bind(this)
  }

  returnURL(url){
    console.log('here')
    console.log(url)
  }

  handleChange({ target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleTypeSelect({ value }) {
    const data = { ...this.state.data, type: value }
    this.setState({ data })
  }

  handleSuitabilitySelect({ value }) {
    const data = { ...this.state.data, suitability: value }
    this.setState({ data })
  }

  handleChargeRadio(e) {
    const data = { ...this.state.data, electricChargingPoint: e.target.value }
    this.setState({ data })
  }

  handlePhotoModal() {
    const options = {
      fromSources: ['local_file_system','instagram','facebook'],
      accept: ['image/*'],
      onFileUploadFinished: file => {
        this.setState({ image: file.url })
      }
    }
    client.picker(options).open()
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = {...this.state.data, images: [this.state.image] }
    axios.post('/api/spaces', data, { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
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
          className="button"
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
          className="button"
          type="button"
          onClick={this.handleNext}>
          Next
        </button>
      )
    }
    return null
  }

  handleGeometryChange(value) {
    const data = {...this.state.data.geometry, coordinates: value}
    this.setState(state => ({...state, data: {...state.data, geometry: data} }), () => console.log(this.state.data))
  }

  render() {
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <p>Step {this.state.data.currentStep}</p>
          <Map2
            geometryChange={this.handleGeometryChange}
          />
          <Step1
            currentStep={this.state.data.currentStep}
            handleChange={this.handleChange}
            handleTypeSelect={this.handleTypeSelect}
            handleSuitabilitySelect={this.handleSuitabilitySelect}
            handleChargeRadio={this.handleChargeRadio}
            type={this.state.data.type}
            suitability={this.state.data.suitability}
            description={this.state.data.description}
            electricChargingPoint={this.state.data.electricChargingPoint}
          />
          <Step2
            currentStep={this.state.data.currentStep}
            handleChange={this.handleChange}
            price={this.state.data.price}
          />
          <Step3
            currentStep={this.state.data.currentStep}
            handlePhotoModal={this.handlePhotoModal}
          />
          {this.previousButton}
          {this.nextButton}
        </form>
      </React.Fragment>
    )
  }
}

export default SpaceForm
