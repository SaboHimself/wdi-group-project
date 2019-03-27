import React from 'react'

import MapModal from './mapModal'

class SideBarItem extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.flytoSelectedSide = this.flytoSelectedSide.bind(this)
  }

  removeClass(){
    this.setState({...this.state.findSidebarDiv, findSidebarDiv: Object.values(this.props.divs).find(div =>  div.listDiv.classList.contains('active'))})
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
        id={`${space._id}`}
        className='listing'
        onClick={() => {
          this.flytoSelectedSide(space)
        }}
        ref={el => (this.listDiv = el)}
      >
        <div className="location">{space.geometry}</div>
        <div>£{space.price}</div>
        <MapModal
          space={space}
        />
      </div>
    )
  }
}

export default SideBarItem
