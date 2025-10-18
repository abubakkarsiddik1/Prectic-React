import React from 'react';
import Link from './Link';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
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
    return (
        <nav>


            <ul className='flex'>
                {
                navLinks.map(route => <Link key={route.id} route={route}></Link>)
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
        </nav>
    );
};

export default NavBar;