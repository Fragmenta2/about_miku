import React from "react";

export default function Main_miku_section() {
    return (
        <>
            <p className="bebas_neue character_title">HATSUNE_MIKU</p>
            <div className="cellphone_bg">
                <div className="cellphone_notch"></div>
                <div className="cellphone_instagram_frame">
                    <div className="cellphone_instragram_frame_top">
                        <img className="cellphone_instragram_pfp" src="images/miku.jpg" />
                    </div>
                    <div className="cellphone_instragram_frame_bottom">
                        <img src="images/like.png" />
                        <img src="images/comment.png" />
                        <img className="" src="images/saved_post.png" />
                    </div>

                </div>
                
                <p className="orbitron cellphone_text"><u>01</u></p>

            </div>
        </>
    );
}
