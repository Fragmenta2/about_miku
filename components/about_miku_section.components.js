'use client'
import { useEffect, React, useState } from "react";

export default function About_miku_section() {

    return (

        <div id='about_miku_section' className="about_miku_section ">
            <div className="about_miku_section_navigation_menu">
                <a href="#main_miku_section"><img onMouseOver={(e) => { e.target.src = 'images/home_miku_selected.svg' }} onMouseLeave={(e) => { e.target.src = 'images/home_miku.svg' }} src='images/home_miku.svg' /></a>
                <a href="#about_miku_section"><img onMouseOver={(e) => { e.target.src = 'images/miku_info_selected.svg' }} onMouseLeave={(e) => { e.target.src = 'images/miku_info.svg' }} src='images/miku_info.svg' /></a>
                <a href="#about_miku_section"><img onMouseOver={(e) => { e.target.src = 'images/miku_contact_selected.svg' }} onMouseLeave={(e) => { e.target.src = 'images/miku_contact.svg' }} src='images/miku_contact.svg' /></a>
            </div>
            <h1 id='about_miku_section_title' className="bebas_neue about_miku_section_title">WHO IS HATSUNE MIKU?</h1>
            <p className="about_miku_section_description">

                Hatsune Miku is a global cultural phenomenon, a virtual pop star known for her distinctive turquoise twin-tails and synthesized voice. However, she is not an anime character or a human performer, but rather the personification of a voice synthesizer software developed by Crypton Future Media.
                <br></br><br></br>
                Released in 2007, the Hatsune Miku software allows users to create their own music by simply typing in lyrics and a melody. Her voice is generated from samples of Japanese voice actress Saki Fujita. This user-driven approach has led to an explosion of creativity, with countless songs, music videos, and illustrations created by fans worldwide, making her a truly crowd-sourced artist.
                <br></br><br></br>
                Miku's popularity has transcended the digital realm. She is depicted as a 16-year-old girl with a futuristic aesthetic and has become a virtual idol, performing in sold-out concerts around the world as a 3D hologram. This innovative concert format, featuring a live band and an energetic digital projection of Miku, has captivated audiences and solidified her status as a legitimate musical act.
                <br></br><br></br>
                More than just a piece of software, Hatsune Miku represents a paradigm shift in music production and consumption. She has democratized the creation of music, empowering a global community of artists and producers to share their work with a massive audience. Her influence extends to video games, merchandise, and collaborations with renowned artists, cementing her legacy as a pioneering figure in the digital age of entertainment.</p>
            <img className='about_miku_section_miku_image' src='https://i.pinimg.com/originals/e5/fb/35/e5fb354990e452a0f2cf8e62d28847b0.png'></img>
        </div>
    );
}
