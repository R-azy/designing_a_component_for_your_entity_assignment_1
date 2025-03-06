// write the component code here
import React from 'react'

const usercard = () => {
    const profilephoto = "https://imgd.aeplcdn.com/664x374/n/cw/ec/47278/m8-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" ;
    const name = "car" ;
    const mail = "car14@gmail.com" ;
    const phonenumber = "9999999999" ;
    const address = "america, california" ;
  return (
    <div>
      <div>
        <img src={profilephoto} alt="profilephoto" />
        <h2>{name}</h2>
        <p>{mail}</p>
        <p>{phonenumber}</p>
        <p>{address}</p>
      </div>
    </div>
  )
}

export default usercard