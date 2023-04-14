import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    const [open, setOpen] = useState(false)
    const lists =[
        {id:1,name:'Home',path:'./home'},
        {id:2,name:'About',path:'./about'},
        {id:3,name:'Learn',path:'./learn'},
        {id:4,name:'Blog',path:'./blog'},
        {id:5,name:'Docomantion',path:'./docomantion'},
    ]
    return (
        <div className='md:bg-purple-800 bg-purple-800 mx-10 mt-5'>
            <nav>
               <div onClick={() =>setOpen(!open)} className='md:hidden'>
                <span>{open === true? <XMarkIcon className="h-6 w-6 text-white"/> : <Bars3Icon className="h-6 w-6 text-white" />}</span>
               
               </div>
                <ul className={`md:flex absolute duration-500 md:static ${open ? 'left-[5rem] bg-red-500 p-3 rounded-lg':'-left-72'}`}>
                    {
                       lists.map(list=><Link key ={list.id} list = {list}></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Nav;