import React from 'react'
import Sectionheader from './Sectionheader'
import Course from './Course'
import { coursesdata } from './Coursesdata'

const Courses = () => {
  return (
    <section id="courses">
      <div className="container">
        <Sectionheader title="Make online Education acessible"
          descrpition="The gradual accumulation of information about atomic and small-scale behaviour... lorem The gradual accumulation of information about atomic and small-scale behaviour" />
        <div className="courses-data">
          {coursesdata.map(course => {
            const { rating, price, id, img, sales, discount, lessons, duration, department, title, descrpition } = course;
            return (
              <Course rating={rating} price={price} id={id} img={img} sales={sales} discount={discount} lessons={lessons} duration={duration} department={department} title={title} descrpition={descrpition} />
            )
          }
          )}
        </div>
      </div>
    </section>
  )
}

export default Courses