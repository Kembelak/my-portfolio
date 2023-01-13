import React from 'react';

import SocialMediaIcons from "../components/SocialMediaIcons"
import useMediaQuery from "../hooks/UseMediaQuery";
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profileImage from "../assets/willy.png"





const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10" id="home">

        {/* IMAGE SECTION */}
        <motion.div
            className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32"
            initial={{opacity:0}}
            animate={{opacity:1}}
            whileInView="visible"
            viewport={{once:true,amount:0.1}}
            transition={{duration:2}}
            
                >
                {isAboveMediumScreens ? (
                <div
                 className="relative w-3/5 z-0 ml-20 before:absolute before:-top-14 before:rounded-t-[400px] before:w-full before:-left-20  before:h-full
                    before:border-4 before:shadow-coverShadow before:bg-bG  before:border-blue before:z-[-1]">
                    <img 
                    alt='profile'
                    src={profileImage}
                    className="hover:filter   hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"/>
                </div>
            ):(
                <img 
                    alt='profile'
                    src={profileImage}
                    className="hover:filter hover:saturate-200  transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"/>
            )}
            

        </motion.div>
            {/* MAIN SECTION */}
            <div className='z-30 basis-2/5 mt-12  md:mt-32'>
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:3}}
                    variants={{
                        hidden:{ opacity:0 , x: -50},
                        visible:{ opacity:1 , x:0 }
                    }}
                >
                    <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                        MMD {""}
                        <span 
                          className="xs:relative xs:text-deep-blue xs:font-semibold z-20
                          xs:before:content-brush before:absolute before:-left-[25px] 
                          before:-top-[77px] before:z-[-1]">
                            MRF
                        </span>
                    </p>
                    <p className='mt-10 mb-12 text-sm text-center md:text-start'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam 
                        omnis esse maxime. Soluta, minus!
                    </p>
                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{delay:1 ,duration:2}}
                    variants={{
                        hidden:{ opacity:0 , x: -350},
                        visible:{ opacity:1 , x:0 }
                    }}
                >   
                    <div className='flex justify-evenly w-full'>
                    <AnchorLink
                        className="bg-gradient-rainbow text-deep-blue rounded-xl	 py-5 px-7 font-semibold
                        hover:bg-light-blue hover:text-white hover:shadow-btnShadow transition duration-500"
                        onClick={()=> setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                        className="bg-gradient-rainbow text-deep-blue rounded-xl py-5 px-7 font-semibold 
                            hover:bg-blue hover:text-white hover:shadow-btnShadow transition duration-500"
                        onClick={()=> setSelectedPage("contact")}
                        href="contact"
                    >
                    Download cv
                    </AnchorLink>
                    </div>
                </motion.div>
                    <SocialMediaIcons/>
            </div>
    </section>
  )
}

export default Landing
