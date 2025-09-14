'use client'
import { useEffect, React, useState } from "react";

export default function Contact_miku_section() {
    return (
        <div id='contact_miku_section' className='contact_miku_section'>
            <h1 id='contact_miku_section_title' className="bebas_neue contact_miku_section_title">Contact...?🤔</h1>
            <img className='contact_miku_section_image' src='images/contact_him.jpg'></img>
            <div className="contact_miku_section_navigation_menu">
                <a href="#main_miku_section"><img onMouseOver={(e) => { e.target.src = 'images/home_miku_selected.svg' }} onMouseLeave={(e) => { e.target.src = 'images/home_miku.svg' }} src='images/home_miku.svg' /></a>
                <a href="#about_miku_section"><img onMouseOver={(e) => { e.target.src = 'images/miku_info_selected.svg' }} onMouseLeave={(e) => { e.target.src = 'images/miku_info.svg' }} src='images/miku_info.svg' /></a>
                <a href="#contact_miku_section"><img onMouseOver={(e) => { e.target.src = 'images/miku_contact_selected.svg' }} onMouseLeave={(e) => { e.target.src = 'images/miku_contact.svg' }} src='images/miku_contact.svg' /></a>
            </div>
            <footer className='footer josefin'>©2025 About_miku_project. All rights reserved. All third-party images, trademarks, and materials are the property of their respective owners. This site is not endorsed by or affiliated with any of the aforementioned entities. Any reference to third-party materials is for identification or commentary purposes only.</footer>
        </div>
    );
}