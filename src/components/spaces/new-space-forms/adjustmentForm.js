import React from 'react'
import Select from 'react-select'

const typeOptions = [
  { value: 'On Road', label: 'On Road' },
  { value: 'Off Road', label: 'Off Road' },
  { value: 'Drive', label: 'Drive' },
  { value: 'Garage', label: 'Garage' }
]

const suitabilityOptions = [
  { value: 'Car', label: 'Car' },
  { value: 'Van', label: 'Van' },
  { value: 'Bike', label: 'Bike' }
]

class AdjustmentForm extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  render(){
    const { data, handleSubmit, handleChange, handleTypeSelect, handleSuitabilitySelect, handleChargeRadio, errors } = this.props
    return(
      <div>
        <form onSubmit={handleSubmit} className="edit">
          <label>
          Type
          </label>
          <Select
            name="type"
            options={typeOptions}
            onChange={handleTypeSelect}
            value={{value: data.type, label: data.type}}
          />
          {errors.type && <div><small className="danger">{errors.type}</small></div>}
          <label>
          Suitability
          </label>
          <Select
            name="suitability"
            options={suitabilityOptions}
            onChange={handleSuitabilitySelect}
            value={!data || {value: data.suitability, label: data.suitability}}
          />
          {errors.suitability && <div><small className="danger">{errors.suitability}</small></div>}
          <label>
          Price
          </label>
          <input
            name="price"
            onChange={handleChange}
            value={!data || data.price}
          />
          {errors.price && <div><small className="danger">{errors.price}</small></div>}
          <label>
          Description
          </label>
          <textarea
            rows="10"
            columns="90"
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={!data || data.description}
          />
          {errors.description && <div><small className="danger">{errors.description}</small></div>}
          <button className="button">Confirm</button>
        </form>
      </div>
    )
  }
}
export default AdjustmentForm
