import React from "react";

export default function Main_miku_section() {
    return (
        <>
            <p>Hatsune Miku</p>
            <div className="cellphone_bg">
                <div className="cellphone_notch"></div>
                <div className="cellphone_instagram_frame">
                    <img className="cellphone_instragram_pfp" src="images/miku.jpg"/>
                    <hr className="cellphone_instragram_frame_bottom_section"/>
                </div>
                <p className="orbitron cellphone_text">01</p>

            </div>
        </>
    );
}
