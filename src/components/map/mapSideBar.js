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
        <div className="location">
          <div className="img-wrapper">
            <img src={space.images[0]}/>
          </div>
          <div className="details">
            <div className="type">{space.type}</div>
            <div className="address">{space.geometry}</div>
          </div>
        </div>
        <div className="bottom">
          <MapModal
            space={space}
          />
          <div className="price">£{space.price}<span class="perHour">ph</span>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBarItem
