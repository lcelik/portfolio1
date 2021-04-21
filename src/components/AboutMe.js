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
                <p> Hi, I'm Lidija. A self-taught, proactive and resourceful junior front-end developer
                    who can build websites and applications from the ground up using an array of technologies. 

                    I am passionate about front end development and web design.

                    I am tuned to the business needs, always striving to deliver high quality solutions.
                    
                    I have completed several Udemy classes, freeCodeCamp and had one on one tuition in front end development. 
                    Coupled with my previous background I feel I will be an asset to any organisation looking 
                    to employ a developer with limited experience eager to expand her skills on the job. 
                </p>
            </div>
        </div>   
     </div>
    )
}



export default AboutMe;