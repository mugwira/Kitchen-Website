import React from 'react'



function Header() {
    return (
        <header className="mx-8 md:container pt-4">
            <nav className="flex justify-between items-center">
                <div className="logo text-xs md:text-small md:text-xl font-mono font-medium">
                   <a href="#"><h4>Claire's Burgers</h4></a> 
                </div>
                <div className="links space-x-2 md:space-x-4 md:text-xl">
                    <a href="#">About</a>
                    <a href="#">Products</a>
                </div>
            </nav>
        </header>
    )
}

export default Header
