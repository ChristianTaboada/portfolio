import React from 'react';
import { BsArrowUpRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services = [
    {
        name: 'UI/UX Design',
        description:
        'Experiencia en prototipado y pruebas de usabilidad, enfocado en la mejora continua de la experiencia del usuario. Busco crecer y aprenderen UX/UI, aplicando estándares de accesibilidad y optimización en cada proyecto.',
        link: 'Learn more',
    },
    {
        name: 'Development',
        description:
        'Creo aplicaciones web escalables y completas utilizando HTML, CSS, JavaScript, React, Redux y Node.js. Abarco tanto el frontend como el backend, garantizando rendimiento óptimo y experiencia de usuario fluida.',
        link: 'Learn more',
    },
    {
        name: 'Resolución eficiente de problemas',
        description:
        'Me destaco por mi capacidad para identificar y abordar desafíos técnicos de manera eficiente. Con una mentalidad analítica y una sólida base de conocimientos, encuentro soluciones efectivas que optimizan la funcionalidad y la eficiencia.',
        link: 'Learn more',
    },
    {
        name: 'Trabajo en equipo colaborativo',
        description:
        'Comunicación efectiva y adaptabilidad en desarrollo web. Experiencia en metodologías ágiles como Scrum. Comprometido con el aprendizaje y la aportación al equipo.',
        link: 'Learn more',
    },
]

const Services = () =>{
    return(
        <div className='section' id='services'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>
                    {/*text and image*/}
                    <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten lg:mb-0 mb-10'>
                        <h2 className='h2 text-accent mb-4'>What I Do.</h2>
                        <h3 className='h3 max-w-[455px] mb-6'>
                        Desarrollando experiencias digitales impactantes
                        </h3>
                        <button className='btn btn-sm'>See my work</button>
                    </motion.div>
                    {/*services*/}
                    <motion.div
                    variants={fadeIn('left', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='flex-1'>
                        {/*server list*/}
                        <div>
                            {services.map((service, index)=>{
                                //destructuring service
                                const {name, description, link} = service;
                                return (
                                <div className='border-b border-white/20 h-[200px] mb-[30px] flex' key={index}>
                                    <div className='max-w-[476px]'>
                                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-5'>{name}</h4>
                                        <p className='font-secondary leading-tight text-base lg:text-lg'>{description}</p>
                                    </div>
                                    <div className='flex flex-col flex-1 items-end'>
                                        <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                                            <BsArrowUpRight/>
                                        </a>
                                        <a href='#' className='text-gradient'>
                                            {link}
                                        </a>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
};

export default Services