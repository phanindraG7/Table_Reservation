import React, { useEffect } from "react";
import './Story.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Story(){
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [controls, inView]);

    return(
        <div>
            <motion.div  
            initial={{ opacity: 0,y:50 }}
            animate={{ opacity: 1 ,y:0}}
            transition={{ 
                duration: 0.9,delay:0.2}}>
            <div id="storybg"><h1 id="ourstory">OUR STORY</h1></div>
            </motion.div>
           <motion.div  
             initial={{ opacity: 0, y: 50 }}
             animate={controls}
             ref={ref}
             transition={{ duration: 0.89 }}>
           <h1 className="header-h1">THE SPACE</h1>
           <p>Opened in 2010 and relocated to its current location in 2014, NeeD is a luxury restaurant located in the heart of Mumbai, India. Nestled in the vibrant streets of Mumbai, Marlowe offers a refined dining experience that blends the best of Indian and international cuisines. </p>
            <p>Helmed by Executive Chef Jennifer Puccio and renowned Mumbai-based designer Ken Fulk, NeeD showcases a fusion of traditional Indian flavors with innovative culinary techniques. Indulge in exquisite dishes like the Marlowe Biryani, tandoori-spiced seafood, saffron-infused butter chicken, and artisanal desserts that will tantalize your taste buds.</p>
            <p>Inspired by the opulent heritage of Mumbai, the restaurant is adorned with ornate decor, featuring intricate Indian motifs, luxurious fabrics, and sparkling chandeliers. The ambiance exudes elegance and sophistication, providing a perfect setting for a memorable dining experience.
                With personalized service and attention to detail, NeeD aims to create an unforgettable culinary journey for its discerning guests. Whether you're celebrating a special occasion or simply seeking an extraordinary dining affair, Marlowe offers a haven of culinary excellence and luxury in the vibrant city of Mumbai.</p>
           </motion.div>
           
        </div>
    )
};

export default Story;