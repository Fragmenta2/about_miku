'use client'
import { useEffect, React, useState } from "react";
import About_miku_section from "@/components/about_miku_section.components";


export default function Main_miku_section() {

    const [is_ready, set_is_ready] = useState(true);

    useEffect(() => {
        if (window.location.hash) {

            history.replaceState(null, null, window.location.pathname);
        }
    }, []);

    function re_adjust() {
        if (document.getElementById('cellphone_miku_sitting') == null) {
            setTimeout(() => { re_adjust() }, 10)
        }
        else {
            let cellphone_bg = document.getElementById('cellphone_bg');
            let cellphone_miku_sitting = document.getElementById('cellphone_miku_sitting');
            cellphone_miku_sitting.style.marginBottom = (cellphone_bg.offsetHeight + 40) + "px";
        }
    }

    useEffect(() => {
        setTimeout(() => {
            set_is_ready(false);
        }, 300);
    }, []);

    if (!is_ready) {
        re_adjust();
        return (
            <>
                <div id='main_miku_section' className='main_miku_section'>
                    <p id="character_title" className="bebas_neue character_title">HATSUNE MIKU</p>

                    <div className="navigation_menu">
                        <a id="start" href="#main_miku_section">Home</a>
                        <a href="#about_miku_section">About</a>
                        <a>Contact</a>
                    </div>
                    <div id="cellphone_bg" className="cellphone_bg">
                        <div className="cellphone_notch"></div>
                        <img id="cellphone_miku_sitting" className="cellphone_miku_sitting" src="images/miku_sit_transparent.png" />


                        <p className="orbitron cellphone_text"><u>01</u></p>
                        <button className="orbitron continue_button">Look More!</button>
                        <Usarwindow fun={re_adjust} />
                    </div>

                </div>
                <About_miku_section />

            </>
        );
    }
    else {
        return (
            <div className="loading_container">

                <span className="loading"></span>
            </div>

        );
    }
}

const Usarwindow = (props) => {

    useEffect(() => {
        window.addEventListener("resize", props.fun);
        return () => {
            window.removeEventListener("resize", props.fun);
        };
    }, []);

    return (
        <>
        </>
    );
};