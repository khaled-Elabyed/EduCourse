import React from 'react'

const Sectionheader = ({title , descrpition}) => {
  return (
    <div className='sectionheader'>
        <span className='texthead'>Practice Advice </span>
        <h1>{title}</h1>
        <p>{descrpition}</p>
    </div>
  )
}

export default Sectionheader