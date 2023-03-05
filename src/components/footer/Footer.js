import React from 'react'
import {FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaDribbble, FaInstagram} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="links-bar">
                <a href="#">Register</a>
                <a href="#">Forum</a>
                <a href="#">Affiliate </a>
                <a href="#FAQ">FAQ</a>
            </div>
            <div className="social-icons">
                <FaFacebook />
                <FaYoutube />
                <FaTwitter />
                <FaDribbble />
                <FaLinkedin />
                <FaInstagram />
            </div>
            <div className="copyright">© 2023. Foodera. All rights reserved.</div>
        </div>
    </footer>
  )
}

export default Footer