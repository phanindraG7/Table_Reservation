import React from 'react';
import './Header.css';
import {motion} from "framer-motion";
import Slideshow from './Slideshow';
import {Link} from 'react-router-dom';


const Header = () => {
  
  return (
    <motion.div 
    initial={{ opacity: 0,y:50 }}
            animate={{ opacity: 1 ,y:0}}
            transition={{ 
                duration: 0.9,delay:0.2}}
    className="app__header app__wrapper section__padding" >
      
      <div className="app__wrapper_info">
        <div className="text-container">
          <h1 className="app__header-h1">" Where flavor meets elegance "</h1>
          <p id='p1' className="text-white" style={{ margin: '2rem' }}>Embark on a culinary journey where opulence meets gastronomy. Delight your senses with exquisite flavors and impeccable service. Immerse yourself in an ambiance of elegance and attention to detail. Experience a haven of culinary excellence and luxury
          </p>
        </div>
        <Link  className='link' to='/Menu'>
        <button type="button" className='btn' style={{backgroundColor:'cornsilk',marginLeft:'4%'}}>Explore Menu</button>
        </Link>
        
        <div className="slideshow-container">
          <Slideshow />
        </div>
      </div>
  
    </motion.div>
  );
};

export default Header;