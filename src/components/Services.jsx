import React from 'react';
import { Tilt } from 'react-tilt';
import {easeIn, easeInOut, motion, spring} from 'framer-motion';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import './service.css'
import { asset15, asset16, asset17, asset18, asset20, asset23, asset22, asset4} from '../assets';

function Services() {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.heroSubText}>What we provide</p>
            <h1 className={styles.heroHeadText}>Our Services.</h1>
        </motion.div>

         <motion.div variants={textVariant()}>
            <section id="slider">
                <input type="radio" name="slider" id="s1" checked />
                <input type="radio" name="slider" id="s2" />
                <input type="radio" name="slider" id="s3" />
                <input type="radio" name="slider" id="s4" />
                <input type="radio" name="slider" id="s5" />
    
                <label for="s1" id="slide1"><img src={asset15} alt="" /></label>
                <label for="s2" id="slide2"><img src={asset16} alt="" /></label>
                <label for="s3" id="slide3"><img src={asset17} alt="" /></label>
                <label for="s4" id="slide4"><img src={asset18} alt="" /></label>
                <label for="s5" id="slide5"><img src={asset20} alt="" /></label>
            </section>
        </motion.div>
    </>
  )
}

export default SectionWrapper(Services, "services")
