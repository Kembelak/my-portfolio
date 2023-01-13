import React from 'react'

import { motion } from 'framer-motion';

import Linkedin from "../assets/linkedin.png"
import WhatsApp from "../assets/whatsapp.png"
import Github from "../assets/Github.png"
import Instagram from "../assets/instagram.png"

const SocialMediaIcons = () => {
  return (
    <motion.div className='flex justify-center my-10 gap-7'
        initial={{opacity:0}}
        animate={{opacity:1}}
        whileInView="visible"
        viewport={{once:true,amount:0.1}}
        transition={{duration:2}}

    >
        <a 
            className='hover:opacity-50 transition duration-500'
            href='https://www.linkedin.com/in/kembelak'
            target="_blank"
            rel="noreferrer"
        >
            <img alt='linkedin-link' src={Linkedin} />
        </a>
        
        <a 
            className='hover:opacity-50 transition duration-500 w-8'
            href='https://wa.me/989160604009'
            target="_blank"
            rel="noreferrer"
        >
            <img alt='twitter-link' src={WhatsApp}/>
        </a>

        <a 
            className='hover:opacity-50 transition duration-500 w-9'
            href='https://github.com/Kembelak'
            target="_blank"
            rel="noreferrer"
        >
            <img alt='Github-link' src={Github}/>
        </a>

        <a 
            className='hover:opacity-50 transition duration-500'
            href='https://www.instagram.com/mohamd_mrf'
            target="_blank"
            rel="noreferrer"
        >
            <img alt='instagram-link' src={Instagram}/>
        </a>

    </motion.div>
  )
}

export default SocialMediaIcons