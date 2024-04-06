import React from 'react';
import { Box } from '@chakra-ui/react'; // Import Box from Chakra UI
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <Box bg="#ECE8CD"> {/* Set the background color of the footer */}
            <footer className="footer">
                <div className="footer_logo">
                    <img src={logo} alt="Logo" />
                </div>
                <hr className="footer__line" />
                <p className="footer__text">Contact us</p>
                <p className="footer__text">email: aa@eek.ee</p>
            </footer>
        </Box>
    );
};

export default Footer;
