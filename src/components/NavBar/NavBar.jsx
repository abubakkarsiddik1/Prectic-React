import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Products",
    path: "/products",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];


const NavBar = () => {

    const [open, setOpen] = useState(false)
    const links = navLinks.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-around mx-10 text-black mt-4 hover:shadow-xl'>
            <span className='flex' onClick={() => setOpen(!open)}>
              {
                 open ?
                      <X className='md:hidden'></X> : 
                      <Menu className='md:hidden'></Menu>
              }                
              <ul className={`md:hidden absolute duration-1000 
                ${open ? 'top-8' : '-top-40'} 
                bg-amber-200`}>
                  {links}
              </ul>
               <h3 className='ml-4'>My NavBar</h3>
            </span>           
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>


            {/* Ami amar moto kore dainamicali banate pari */}
            {/* <ul className='flex'>
                {
                   navLinks.map(route =><li className='mr-10'>
                    <a href={route.path}>{route.name}</a></li> )
                }
            </ul> */}

            {/* Ami chaile A vabe o korte pari */}
            {/* <ul className='flex '>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
                <li className='mr-10'><a href="/log in">Log In</a></li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;