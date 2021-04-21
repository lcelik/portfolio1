import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// AVATARS IMPORTS
import avatar1 from '../avatars/avatar1.png';
import avatar2 from '../avatars/avatar2.png';
import avatar3 from '../avatars/avatar3.png';
import avatar4 from '../avatars/avatar4.png';

const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}>
            <>
            <img src={avatar1} alt='Avatar'/>
            <div className='myCarousel'>
            <h3>Person 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </>

            <>
            <img src={avatar2} alt='Avatar'/>
            <div className='myCarousel'>
            <h3>Person 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </>

            <>
            <img src={avatar3} alt='Avatar'/>
            <div className='myCarousel'>
            <h3>Person 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </>

            <>
            <img src={avatar4} alt='Avatar'/>
            <div className='myCarousel'>
            <h3>Person 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel;