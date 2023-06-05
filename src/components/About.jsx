import React from 'react';
import { Tilt } from 'react-tilt';
import {easeIn, motion} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full min-h-[240px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                >
                    <div 
                        options = {{
                            max:45,
                            scale: 1,
                            speed: 450
                        }}
                        className="bg-tertiary rounded-[20px] py-6 px-12 min-h-[290px] flex justify-evenly items-center flex-col"
                    >
                        <img src={icon} alt={title}
                        className='w-16 h-16 object-contain' />
                        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                    </div>
            </motion.div>

        </Tilt>
    )
}

function About() {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.heroSubText}>Introduction</p>
            <h1 className={styles.heroHeadText}>About Us.</h1>
        </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white font-bold text-[20px] max-w-3xl leading-[30px]"
            style={{display: "flex"}}
        >   
            At DSB Media, we understand the importance of a strong online presence in today's digital age. That’s why we offer a comprehensive range of social media solutions to help businesses of all sizes succeed. From crafting compelling content to developing targeted social media campaigns, our team of experienced professionals has the skills and expertise to drive results.
        </motion.p>

        <motion.p
            variants={fadeIn("", "", 0.2, 2)}
            className="mt-3 text-white font-bold text-[20px] max-w-3xl leading-[30px]"
            style={{display: "flex"}}
        >
            If You're looking to increase brand awareness, boost website traffic, or generate leads, we can help. Our tailored approach ensures that we meet your specific business goals and needs, and we pride ourselves on building long-term relationships with our clients based on trust and transparency. When you choose DSB Media as your social media partner, you can trust that you're in good hands.
        </motion.p>
        {/* <div className="mt-20 flex flex-wrap gap-10">
            {services.map((services, index) => (
                <ServiceCard key={services.title} index={index}
                {...services}/>
            ))}
        </div> */}
    </>
  )
}

export default SectionWrapper(About, "about" )