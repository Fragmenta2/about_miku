'use client'
import { useEffect, React, useState } from "react";

export default function About_miku_section() {

    function re_adjust_about_miku() {
        if (document.getElementById('main_miku_info_container') == null) {
            setTimeout(() => { re_adjust_about_miku() }, 10)
        }
        else {
            let about_miku_section_title = document.getElementById('about_miku_section_title');
            let main_miku_info_container = document.getElementById('main_miku_info_container');
            main_miku_info_container.style.width = about_miku_section_title.offsetWidth + "px";
            main_miku_info_container.style.height = window.innerHeight - (about_miku_section_title.offsetHeight + 150) + "px";
            main_miku_info_container.style.top = about_miku_section_title.offsetHeight + "px";
        }
    }
    re_adjust_about_miku();
    return (

        <div id='about_miku_section' className="about_miku_section ">
            <div className="about_miku_section_navigation_menu">
                <a href="#main_miku_section"><img onMouseOver={(e) => { e.target.src = 'images/home_miku_selected.svg' }} onMouseLeave={(e) => { e.target.src = 'images/home_miku.svg' }} src='images/home_miku.svg' /></a>
                <a href="#about_miku_section"><img onMouseOver={(e) => { e.target.src = 'images/miku_info_selected.svg' }} onMouseLeave={(e) => { e.target.src = 'images/miku_info.svg' }} src='images/miku_info.svg' /></a>
                <a href="#contact_miku_section"><img onMouseOver={(e) => { e.target.src = 'images/miku_contact_selected.svg' }} onMouseLeave={(e) => { e.target.src = 'images/miku_contact.svg' }} src='images/miku_contact.svg' /></a>
            </div>
            <h1 id='about_miku_section_title' className="bebas_neue about_miku_section_title">WHO IS HATSUNE MIKU?</h1>
            <div id='main_miku_info_container' className='main_miku_info_container'>
                <Miku_info url='images/first_miku_slide.jpg' bg_color='rgba(0,0,0,.9)' title='She IS vocaloid' description='Miku is a voice synthesizer software, a virtual singer whose voice can be used by any creator to produce original music and she is the most widely used.' color='white'/>
                <Miku_info url='images/hatsune_hijole.jpg' bg_color='rgba(0,0,0,.9)' title='She IS a meme' description='Her image is a cornerstone of internet culture, starring in countless viral parodies, trends, and the iconic "Leekspin" animation.' color='white' />
                <Miku_info url='images/third_miku_slide.jpg' bg_color='rgba(0,0,0,.9)' title='She IS an inspiration' description='She serves as a creative muse for a global community, inspiring countless musicians, animators, and artists to create and share original works.' color='white'/>
                <Miku_info url='images/fourth_miku_slide.jpg' bg_color='rgba(0,0,0,.9)' title='She IS an IDOL' description='A true virtual pop star, Miku headlines sold-out concerts around the globe, performing live on stage as a stunning 3D projection.' color='white'/>
            </div>
            <img className='about_miku_section_miku_image' src='https://i.pinimg.com/originals/e5/fb/35/e5fb354990e452a0f2cf8e62d28847b0.png'></img>
            <Usarwindow fun={re_adjust_about_miku} />
        </div>
    );
}

function Miku_info(props) {
    return (
        <div style={{background:props.bg_color}} className="miku_info_containers">
            <img  className='miku_image_slide' src={props.url}/>    
            <h1 style={{color:props.color}} className='miku_containers_titles bebas_neue'> {props.title}</h1>
            <p className='miku_containers_descriptions'>{props.description}</p>
        </div>
    );
}


const Usarwindow = (props) => {

    useEffect(() => {
        window.addEventListener("resize", props.fun);
        return () => {
            window.removeEventListener("resize", props.fun);
        };
    }, []);

    return (<> </>);
};