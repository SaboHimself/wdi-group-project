import React from 'react'

import MapModal from './mapModal'

class SideBarItem extends React.Component {
  constructor() {
    super()

    this.state = {
      active: ''
    }

    this.flytoSelectedSide = this.flytoSelectedSide.bind(this)
  }

  flytoSelectedSide({ _id }){
    const lnglat = this.props.lnglat.find(space => space._id === _id).geometry.coordinates
    this.props.map.flyTo({
      center: lnglat,
      zoom: 15
    })
  }

  render() {
    const { space } = this.props
    return(
      <div
        className={`${this.state.active ? 'active' : ''}`}
        onClick={() => {
          this.flytoSelectedSide(space)
        }}
      >
        <div>{space.geometry}</div>
        <div>{space.type}</div>
        <div>{space.suitability}</div>
        <div>£{space.price}</div>
        <MapModal
          space={space}
        />
      </div>
    )
  }
}

export default SideBarItem
