import React from 'react';
import { NavLink } from 'react-router-dom'

const links = [{
    to:'/',
    label:'Home Page'
},
{
    to:'/posts',
    label:'Posts'
},
{
    to:'/contacts',
    label:'Contact book'
},
{
    to:'/photos',
    label:'Photos'
},
]

const NavBar = () => (
    <nav className="navigation">
        <ul className="navigation-menu">
            {links.map(link => (
               <li className="navigation-item" key={link.to}>
                   <NavLink to={link.to}>{link.label}</NavLink>
               </li> 
            ))}
        </ul>
    </nav>
)

export default NavBar;