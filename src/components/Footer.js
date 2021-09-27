import React from 'react'
import {FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'

function Footer() {
    return (
        <footer className="mx-8 md:container flex justify-between items-center mt-16 py-8 bg-red-">
            
            <div className="links flex text-xs md:text-2xl space-x-1 md:space-x-4 text-red-500 ">
                
                <a className="hover:text-red-400" href="https://twitter.com/home"><FaTwitter /></a>
                <a className="hover:text-red-400" href="https://facebook.com/home"><FaFacebookF /></a>
                <a className="hover:text-red-400" href="https://instagram.com/home"><AiOutlineInstagram /></a>
                <a className="hover:text-red-400" href="https://linkedin.com/home"><FaLinkedinIn /></a>
                <a className="hover:text-red-400" href="https://github.com/home"><AiFillGithub /></a>
            </div>
            <div className="copyright text-xs md:text-lg text-gray-600">
                &copy; 2021 Claire'sBurgers
            </div>
       
        </footer>
    )
}

export default Footer
