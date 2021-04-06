
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';


function App() {
  return (
  <>
  <Particles
  className='particles-canvas'
   params={{
     particles: {
       number: {
         value: 30,
         density: {
           enable: true,
           value_area: 900
          }
     }
    }
   }}
  />
  <Navbar/>
  <Header/>
  <AboutMe/>
  <Services/>SS
  <Testimonials/>
  <Contacts/>
  <Footer/>
  <Portfolio/>
  
  </>
  );
}

export default App;
