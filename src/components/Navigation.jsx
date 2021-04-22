import React from 'react';
import { NavLink } from 'react-router-dom'

const links = [{
    to:'/hw21-react-router/',
    label:'Home Page'
},
{
    to:'/hw21-react-router/posts',
    label:'Posts'
},
{
    to:'/hw21-react-router/contacts',
    label:'Contact book'
},
{
    to:'/hw21-react-router/photos',
    label:'Photos'
},
]

const NavBar = () => (
    <nav className="navigation">
        <ul className="flex">
            {links.map(link => (
               <li className="navigation-item" key={link.to}>
                   <NavLink exact to={link.to}>{link.label}</NavLink>
               </li> 
            ))}
        </ul>
    </nav>
)

export default NavBar;