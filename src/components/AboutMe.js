import React from 'react';
import author from '../lidija.jpg';

const AboutMe = () => {

return (
     <div id='about' className='container py-5'>
        <div className="row">
            <div className='col-lg-6 col-xm-12'>
               <div className='photo-wrap mb-5'>
                   <img className='profile-img' src={author} alt='author...'/>
                    </div> 
            </div>
            <div className='col-lg-6 col-xm-12'>
                <h1 className='about-heading'>about me</h1>
                <p>Hello! I am Lidija. Self-taught, proactive and resourceful junior front-end developer
                    who can build applications from the ground up using an array of technologies. 

                    I am passionate about software architecture and design and follow industry trends.

                    I am tuned to the business needs, always striving to deliver high quality solutions.
                    
                    I have completed a big number of Udemy classes and had one on one tuition in front end development, 
                    coupled with my previous experience I feel I will be an asset to any organisation looking 
                    to employ a developer with limited experience. 
                </p>
            </div>
        </div>   
     </div>
    )
}



export default AboutMe;