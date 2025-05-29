import React from 'react'

const Card = ({id,img,color,bgcolor,title,descrpition }) => {
  return (
    <div className='cards'>
      <span className='icon' style={{color:color, background:bgcolor}}>{img}</span>
      <h1>{title}</h1>
      <span className="line"></span>
      <p>{descrpition}</p>
    </div>
  )
}

export default Card