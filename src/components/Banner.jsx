import React from 'react';

import image from '../assets/banner-web.jpg';
import {FaGithub, FaYoutube, FaDribbble, FaInstagram, FaTwitter, FaLinkedin, FaDiscord, FaFacebook}  from 'react-icons/fa';
import {TypeAnimation}  from 'react-type-animation';
import {motion} from 'framer-motion'

const Banner = () =>{
    return(
        <section className='section' id='home'>
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    {/*texto*/}
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>CHRISTIAN <span>TABOADA</span>
                        </h1>
                        <div className='mb-6 text -[36px] lg:text-[60px] font secondary font-semibold uppercase leading[-1]'>
                            <span className='text-white mr-4'>I am a</span>
                            <TypeAnimation 
                            sequence={[
                                'Developer',
                                2000,
                                'FullStack',
                                2000,
                                'Front-End',
                                2000,
                            ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                            />
                        </div>
                        <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, consectetur maxime, voluptas ad corrupti hic debitis nobis id rerum voluptate quasi praesentium odit nostrum harum fugiat consequuntur ex dolore sunt.
                        </p>
                        <div className='flex max-w-max gap-x-6 items-center mb-12 max-auto lg:mx:0'>
                            <button className='btn btn-lg'>Contact Me</button>
                            <a href='#' className='text-gradient btn-link'>
                                My Portfolio
                            </a>
                        </div>
                        <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href='#'>
                                <FaInstagram/>
                            </a>
                            <a href='#'>
                                <FaTwitter/>
                            </a>
                            <a href='#'>
                                <FaFacebook/>
                            </a>
                            <a href='#'>
                                <FaGithub/>
                            </a>
                            <a href='#'>
                                <FaLinkedin/>
                            </a>
                            <a href='#'>
                                <FaDiscord/>
                            </a>
                        </div>
                    </div>
                    {/*imagen*/}
                    <div>
                        <img src={image} alt=''/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Banner