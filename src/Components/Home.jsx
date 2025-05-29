
import React from 'react'
import Datahome, {  cardsdata } from './Datahome'
import Card from './Card'
const Home = () => {
    return (
        <section id='home'>
            <div className="container">
                <div className="header-home">
                    <span>Join Us</span>
                    <h1>Best Learning Opportunities</h1>
                    <p>we know how large object will act, but things on a small scale  just do not act that way.</p>
                    <a className='btn btn-home' href="#">Get Quote Now</a>
                    <a className='btn btn-home2' href="#">Learn More</a>
                </div> 
               <div className="datahome">
                {cardsdata.map(cards =>{
                    const  {id,img,title,color,bgcolor,descrpition} =cards
                    return(
                    <Card id={id} title={title} img={img} color={color} bgcolor={bgcolor} descrpition={descrpition} />
                    )
                })}
               </div>
            </div>
        </section>
    )
}

export default Home