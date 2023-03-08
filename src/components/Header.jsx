import React from 'react';

import logo from '../assets/logo-panterovich.png';

const Header = () =>{
    return(
        <header className='py-8'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <a>
                        <img src={logo} alt='' className='w-1/6 h-1/6'/>
                    </a>
                    <button className='btn btn-sm whitespace-nowrap'>Work with me</button>
                </div>
            </div>
            </header>
    )
};

export default Header