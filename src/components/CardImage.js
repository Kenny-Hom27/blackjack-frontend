import React from 'react'

const CardImage = (props) => {
  const { image } = props.card
  return(
    <div>
      <img src={image} width="175px" alt="" />
    </div>
  )
}
export default CardImage
