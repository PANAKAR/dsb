import React from 'react';
import { Tilt } from 'react-tilt';
import {easeIn, easeInOut, motion, spring} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon, description}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", 0.5 * index, 0.75)}
                className="w-full min-h-[300px] p-[1px] rounded-[20px] shadow-card-900"
                >
                    <div 
                        options = {{
                            max:45,
                            scale: 1,
                            speed: 450
                        }}
                        className="text-black h-[400px] rounded-[20px] py-6 px-12 min-h-[290px] flex justify-evenly items-center flex-col"
                        style={{background: "white",
                            boxShadow: "10px 12px 9px gray" }}
                    >
                        <img src={icon} alt={title}
                        className='w-25 h-25 object-contain'  />
                        <h3 className="text-black text-[20px] font-bold text-center">{title}</h3>
                        <br />
                        <h5 className="text-black text-[12px] font-bold text-center">{description}</h5>
                    </div>
            </motion.div>

        </Tilt>
    )
}

function Services() {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.heroSubText}>What we provide</p>
            <h1 className={styles.heroHeadText}>Our Services.</h1>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-10 h-35 flex justify-center items-center">
            {services.map((services, index) => (
                <ServiceCard key={services.title} index={index} 
                {...services}/>
            ))}
        </div>
    </>
  )
}

export default SectionWrapper(Services, "")
