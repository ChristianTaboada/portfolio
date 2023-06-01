import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

import {useState} from 'react';
import axios from 'axios';

const Contact = () =>{

    const   [nombre, setNombre] = useState('');
    const   [correo, setCorreo] = useState('');
    const   [mensaje, setMensaje] = useState('');

    const handleNombreChange = (event) =>{
        setNombre(event.target.value);
    };

    const handleCorreoChange = (event) =>{
        setCorreo(event.target.value);
    }

    const handleMensajeChange = (event) =>{
        setMensaje(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        axios.post('http://localhost:3001/formulario', {nombre, correo, mensaje})
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error) =>{
            console.log(error);
        });
    };
    return(
        <section className='py-16 lg:section' id='contact'>
            <div className="container mix-auto">
                <div className='flex flex-col lg:flex-row'>
                    {/*text*/}
                    <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden' 
                    whileInView={'show'} 
                    viewport={{once:false, amount:0.3}}
                     className='flex-1 flex justify-start items-center'>
                        <div className='text-[45px] lg:text-[90px] leading-none mb-12'>
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                            <h2>Let's work<br/>Togheter!
                            </h2>
                        </div>
                    </motion.div>
                    {/*form*/}
                    <motion.form
                    onSubmit={handleSubmit}
                    variants={fadeIn('left', 0.3)}
                    initial='hidden' 
                    whileInView={'show'} 
                    viewport={{once:false, amount:0.3}}
                    className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
                    >
                        <input
                        type='text'
                        value={nombre}
                        onChange={handleNombreChange}
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                        placeholder='Your name'
                        />
                        <input
                        type='email'
                        value={correo}
                        onChange={handleCorreoChange}
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                        placeholder='Your email'
                        />
                        <textarea
                        value={mensaje}
                        onChange={handleMensajeChange}
                        className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                        placeholder='Your message'>
                        </textarea>
                        <button type="submit" className='btn btn-lg'>Send message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
};

export default Contact