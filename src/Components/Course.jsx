import React from 'react'
import { IoMdAlarm } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { FaStar, FaChevronRight } from "react-icons/fa";
const Course = ({ rating, price, id, img, sales, discount, lessons, duration, department, title, descrpition }) => {
  return (
    <div className='course'>
      <span className="sale">Sale</span>
      <img src={img} alt={title} />
      <div className="contet">
        <div className="coursefield">
          <p className='department'>{department} </p>
          <p className='rating'><FaStar />{rating}</p>
        </div>
        <h2>{title}</h2>
        <p className='description'>{descrpition}</p>
        <p className='sales'>{sales} Sales</p>
        <p className='price'>
          <del>{price}</del>
          <span className='discount'>{discount}</span>
        </p>
        <div className="course-info">
          <p className='duration'><IoMdAlarm /> {duration}  </p>
          <p className='lesson'><FaBookOpen /> {lessons} </p>
        </div>
          <a className='btn-learn' href="#">Learn More <FaChevronRight /></a>
      </div>
    </div>
  )
}

export default Course