import React from 'react';
import CountUp from 'react-countup'
import{useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const About = () =>{
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return(
        <section className='section' id='about' ref={ref}>
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                    {/*imagen*/}
                    <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
                    </motion.div>
                    {/*text*/}
                    <motion.div
                    variants={fadeIn('left', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }} 
                    className='flex-1'>
                        <h2 className='h2 text-accent'>About me</h2>
                        <h3 className='h3 mb-4'>
                            I'm a Developer Full Stack with over 8 month of experience.
                        </h3>
                        <p className='mb-6'>
                        Mi objetivo principal es combinar una sólida base técnica con una creatividad innovadora para entregar proyectos excepcionales.
                        <br/>
                        Con una amplia experiencia en el desarrollo tanto del lado del cliente como del servidor, puedo crear aplicaciones web interactivas y escalables.
                        <br/>
                        Me siento cómodo trabajando con tecnologías como HTML, CSS, JavaScript, así como con frameworks y bibliotecas populares como React en el lado del cliente.
                        <br/>
                        Además, tengo experiencia en el desarrollo de API RESTful utilizando Node.js y Express, y puedo integrar eficientemente bases de datos como MySQL, MongoDB y PostgreSQL.
                        </p>
                        {/*stats*/}
                        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {
                                    inView? <CountUp start={0} end={6} duration={3}/> : null
                                    }
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>Meses de <br/>
                                Experiencia
                                </div>
                            </div>
                        </div>
                        <div className='flex max-w-max gap-x-6 items-center mb-12 max-auto lg:mx:0'>
                            <button className='btn btn-lg'>Contact me</button>
                            <a href='#' className='text-gradient btn-link'>
                                My Portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default About