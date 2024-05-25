import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1 style={{color: 'black'}}>{title}</h1>
        <p style={{color: 'black',fontWeight:'bold' }}>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
