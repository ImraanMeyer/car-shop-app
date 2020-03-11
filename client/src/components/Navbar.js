import React from 'react';
import Link from './Link'

// const URLS = ['Home', 'About', 'Posts']
const newURL = {
    1: 'Home',
    2: 'About',
    3: 'Posts'
}

const Navbar = () => {
    return (
        <div>
            <ul>
                {
                    Object.entries(newURL).forEach((link) => (
                        <Link link={link} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar;