
import React from 'react'
import Sectionheader from './Sectionheader'
import Reviewsdata, { Reviewdata } from './Reviewsdata'
import Feedback from './Feedback'

const Reviews = () => {
    return (
        <section id='reviwes'>
            <div className="container">
                <Sectionheader title="Each and every client is important"
                descrpition="Discover what our student are saying in the Review section Real Feedback From learners who have experienced and benefit from our" />
            <div className="Reviewsdata">
                {Reviewdata.map(Review => {
                    const {id,stars,img,descrpition,name,job} = Review
                return(
                    <Feedback key={id} stars={stars} img={img} name={name} job={job} descrpition={descrpition} />
                )
            })}
            </div>    
            </div>
        </section>
    )
}

export default Reviews