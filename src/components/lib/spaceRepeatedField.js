import React from 'react'

const SpaceRepeatedField = ({ space }) => {
  return(
    <div>
      <div>{space.location}</div>
      <div>{space.suitability}</div>
      {space.images.map((image, id) => (
        <img key={id} src={image} />
      ))}
      <hr />
      <div>{space.type}</div>
      <div>{space.availability.toString()}</div>
      <div>£{space.price}</div>
      <div>{space.description}</div>
      <div>{space.electricChargingPoint.toString()}</div>
      <div>{space.owner.username}</div>
      <div>{space.comments[0].text}</div>
    </div>
  )
}

export default SpaceRepeatedField
