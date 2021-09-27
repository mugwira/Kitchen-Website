import React from 'react'
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header className="mx-8 md:container pt-4">
            <nav className="flex justify-between items-center">
                <div className="logo text-xs md:text-small md:text-xl font-mono font-medium">
                   <Link to="/products"><h4>Claire's Burgers</h4></Link> 
                </div>
                <div className="links space-x-2 md:space-x-4 md:text-xl">
                    <Link to="/specials" className="hover:text-red-700" href="#">Specials</Link>
                    <Link to="/products"className="hover:text-red-700" href="#">Products</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
