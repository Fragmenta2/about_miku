'use client'
import { useEffect,React,useState } from "react";

export default function Main_miku_section() {

    const [is_ready,set_is_ready] = useState(true);


    function re_adjust(){
        let cellphone_bg = document.getElementById('cellphone_bg');
        let cellphone_miku_sitting = document.getElementById('cellphone_miku_sitting')!=null ? document.getElementById('cellphone_miku_sitting'):0;
        !(cellphone_miku_sitting == 0) ? cellphone_miku_sitting.style.marginBottom = (cellphone_bg.offsetHeight + 40) +"px":setTimeout(()=>{re_adjust()},10);
    }
     useEffect(() => {
      set_is_ready(false);
    }, []); 
    
    if (!is_ready){
         re_adjust();
    return (
        <>
            <p className="bebas_neue character_title">HATSUNE'MIKU</p>
            <div className="navigation_menu">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div id="cellphone_bg" className="cellphone_bg">
                <div className="cellphone_notch"></div>
                <img id="cellphone_miku_sitting" className="cellphone_miku_sitting" src="images/miku_sit_transparent.png"/>
                <div className="cellphone_instagram_frame">
                    <div className="cellphone_instragram_frame_top">
                    </div>
                    <div className="cellphone_instragram_frame_bottom">
                    </div>

                </div>
                
                <p className="orbitron cellphone_text"><u>01</u></p>
                <Usarwindow fun={re_adjust}/>
            </div>
        </>
    );
    }
    else{
        return(<> hola</>);
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