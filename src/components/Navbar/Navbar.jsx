/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About",
            path: "/about"
        },
        {
            id: 3,
            name: "Contact",
            path: "/contact"
        },
        {
            id: 4,
            name: "Services",
            path: "/services"
        },
        {
            id: 5,
            name: "Blog",
            path: "/blog"
        }
    ];

    return (
        <nav className='bg-purple-400 px-4'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ?
                            <XMarkIcon className="size-6 text-black-500" />
                            : <Bars3Icon className="size-6 text-black-500" />
                    }
                </span>
            </div>
            <ul className={`md:flex absolute md:static bg-purple-400 pl-4 duration-300 ${open ? 'left-0' : '-left-48'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;