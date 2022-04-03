import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const links=[

        {name:'Home', to:'/' ,id:1 ,},
        {name:'Place', to:'/place' ,id:1 ,},
        {name:'About', to:'/about' ,id:2 ,},
        {name:'Gallery', to:'/gallery' ,id:3 ,},
        {name:'Contact', to:'/contact' ,id:4 ,},
        {name:'Login', to:'/login' ,id:5},
    ]
    // const [isActive,setActive]=useState(false)
    return (
        <div className='w-full bg-slate-800 text-white h-[8rem] flex items-center justify-center'>
            <nav className='flex justify-between items-center w-11/12 h-full mx-auto'>
                <div className="logo">
                    <h1 className='text-5xl'>V-TRAVEL</h1>
                </div>
                <div className="menu flex">
                    {
                        links.map(link => <NavLink 
                            className={`ml-4 text-3xl ${ (isActive)=> isActive ? 'link':''}`}
                            to={link.to}
                             key={link.id} >{link.name}</NavLink>)
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;