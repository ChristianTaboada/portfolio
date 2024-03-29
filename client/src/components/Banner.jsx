import React from 'react';

import image from '../assets/banner-web.jpg';
import {FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaDiscord, FaFacebook, FaWhatsapp}  from 'react-icons/fa';
import {TypeAnimation}  from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import {Link} from 'react-scroll'

const Banner = () =>{
    return(
        <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    {/*texto*/}
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1 
                        variants={fadeIn('up', 0.3)}
                        initial='hidden' 
                        whileInView={'show'} 
                        viewport={{once:false, amount:0.7}}
                        className=' text-[55px] font-bold leading-[0.8] lg:text-[110px] lg:mb-4'>CHRISTIAN <span>TABOADA</span>
                        </motion.h1>
                        <motion.div
                         variants={fadeIn('up', 0.4)}
                         initial='hidden' 
                         whileInView={'show'} 
                         viewport={{once:false, amount:0.7}}
                        className='mb-6 mt-6 text -[36px] lg:text-[60px] font secondary font-semibold uppercase leading[-1]'>
                            <span className='text-white mr-4'>I am a</span>
                            <TypeAnimation 
                            sequence={[
                                'Developer',
                                2000,
                                'FullStack',
                                2000,
                                'Front-End',
                                2000,
                                'Back-End',
                                2000,
                            ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                         variants={fadeIn('up', 0.5)}
                         initial='hidden' 
                         whileInView={'show'} 
                         viewport={{once:false, amount:0.7}}
                         className='mb-8 max-w-lg mx-auto lg:mx-0'>
                        CREANDO EXPERIENCIAS WEB INTUITIVAS Y CAUTIVADORAS
                        </motion.p>
                        <motion.div 
                        variants={fadeIn('up', 0.6)}
                        initial='hidden' 
                        whileInView={'show'} 
                        viewport={{once:false, amount:0.7}}
                        className='flex max-w-max gap-x-6 items-center mb-12 max-auto lg:mx:0'>
                            <Link 
                            to='contact'
                            activeClass='active'
                            smooth={true}
                            spy={true}
                            className='btn btn-lg flex items-center cursor-pointer'>Contact Me
                            </Link>
                            <a href='https://github.com/ChristianTaboada?tab=repositories' target='blank' className='text-gradient btn-link'>
                                My Portfolio
                            </a>
                            <a href='https://drive.google.com/uc?export=download&id=1ytiWDMQ3fzctKj13QXn_dNN_PeReCV7l' className='text-gradient btn-link'>
                                My CV
                            </a>
                        </motion.div>
                        <motion.div
                        variants={fadeIn('up', 0.7)}
                        initial='hidden' 
                        whileInView={'show'} 
                        viewport={{once:false, amount:0.7}}
                        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href='https://www.linkedin.com/in/christian-taboada/' target='blank'>
                                <FaLinkedin/>
                            </a>
                            <a href='https://github.com/ChristianTaboada' target='blank'>
                                <FaGithub/>
                            </a>
                            <a href='https://wa.me/541138722810' target='blank'>
                                <FaWhatsapp/>
                            </a>
                            <a href='https://twitter.com/LaPanteraGrosa' target='blank'>
                                <FaTwitter/>
                            </a>
                            <a href='https://www.instagram.com/chris__taboada/' target='blank'>
                                <FaInstagram/>
                            </a>
                            <a href='https://www.facebook.com/christian.taboada.7' target='blank'>
                                <FaFacebook/>
                            </a>
                            <a href='https://discord.gg/pHfSq7XUvB' target='blank'>
                                <FaDiscord/>
                            </a>
                        </motion.div>
                    </div>
                    {/*imagen*/}
                    <motion.div
                    variants={fadeIn('down', 0.5)}
                    initial='hidden' 
                    whileInView={'show'}
                    className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
                        <img className=' rounded-full' src={image} alt=''/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default Banner