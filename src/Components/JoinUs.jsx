import React from 'react'

const JoinUs = () => {
  return (
    <section id='join-us'>
        <div className="content">
            <span className="text">Practice Advice</span>
            <h1>JOIN US</h1>
            <p>Have question or need assistance ? Reach out to us through our team we are here to help and ensure you have the best experince possible</p>
            <div className="sign">
            <input type="email" name="email" id="email" placeholder='Your Email' />
            <button type="submit">Subscribe</button>
            </div>        
        </div>
    </section>
  )
}

export default JoinUs