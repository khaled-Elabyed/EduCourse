
import React from 'react'

const Feedback = ({id,stars,img,descrpition,name,job}) => {
  return (
    <section className='review'>
        <span className='stars'>{stars}</span>
        <p className='descrpition'>{descrpition}</p>
        <div className="person">
        <img src={img} alt={name} />
        <div>
        <h4 className='name'>{name}</h4>
        <p className="job">{job}</p>
        </div>
        </div>
    </section>
  )
}

export default Feedback