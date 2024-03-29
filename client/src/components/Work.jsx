import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import img1 from '../assets/videogames-landing.png'
import img2 from '../assets/dressmeMap.jpeg'
import img3 from '../assets/dressmeMP.jpeg'


const Work = () =>{
    return(
        <section className='section' id='work'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden' 
                    whileInView={'show'} 
                    viewport={{once:false, amount:0.7}}
                    className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        {/*text*/}
                        <div>
                            <h2 className='h2 leading-tight text-accent'>
                                My Latest <br/>
                                Work.
                            </h2>
                            <p className='max-w-sm mb-12'>
                                Portafolio de mis últimas creaciones
                            </p>
                            <button className='btn btn-sm mb-20' onClick={() => window.open("https://github.com/ChristianTaboada?tab=repositories", "_blank")}>View all projects</button>
                        </div>
                        {/*image*/}
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                        <a href='https://pi-videogames-main-khaki.vercel.app' target='blank'>
                            {/*overlay*/}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/*img*/}
                                <img 
                                className='group-hover:scale-125 transition-all duration-500' 
                                src={img1} 
                                alt=''></img>
                                {/*pretitle*/}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient'>UI/UX Design</span>
                                </div>
                                {/*title*/}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                    <span className='text-3x1 text-white'>Videogames</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden' 
                    whileInView={'show'} 
                    viewport={{once:false, amount:0.7}}
                    className='flex-1 flex flex-col gap-y-10'>
                        {/*img2*/}
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                        <a href='https://proyecto-final-henry-nu.vercel.app' target='blank'>
                            {/*overlay*/}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/*img*/}
                                <img 
                                className='group-hover:scale-125 transition-all duration-500' 
                                src={img2} 
                                alt=''></img>
                                {/*pretitle*/}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient'>UI/UX Design</span>
                                </div>
                                {/*title*/}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                    <span className='text-3x1 text-white'>DressMe</span>
                                </div>
                            </a>
                        </div>
                        {/*img3*/}
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            <a href='https://proyecto-final-henry-nu.vercel.app' target='blank'>
                            {/*overlay*/}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/*img*/}
                                <img 
                                className='group-hover:scale-125 transition-all duration-500' 
                                src={img3} 
                                alt=''></img>
                                {/*pretitle*/}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient'>UI/UX Design</span>
                                </div>
                                {/*title*/}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                    <span className='text-3x1 text-white'>DressMe MercadoPago</span>
                                </div>
                                </a>
                        </div>
                    </motion.div>
                </div>
            </div>
            </section>
    )
};

export default Work