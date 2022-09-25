import React, {useEffect, useState} from 'react';
import { IconContext } from "react-icons";

import {SiCodewars} from "react-icons/si";
import {FaFacebookSquare, FaGithubSquare, FaLinkedin} from "react-icons/fa";


function SocialIcon({icon}) {

    const [mouseOver, setMouseOver] = useState(false)
    let iconRender
    let iconLink

        switch (icon) {
            case "Github": {
                iconRender = <FaGithubSquare color={mouseOver ? "white" : "#a5a5a5"}/>
                iconLink = 'https://github.com/gagal18'
            }break;
            case "Facebook": {
                iconRender = <FaFacebookSquare color={mouseOver ? "#1877f2" :  "#a5a5a5"}/>
                iconLink = 'https://www.facebook.com/bojan.gagaleski'
            }break;
            case "LinkedIn": {
                iconRender = <FaLinkedin color={mouseOver ? "#3987C8" :  "#a5a5a5"}/>
                iconLink = 'https://www.linkedin.com/in/bojan-gagaleski-318922197'
            }break;
            default:
                console.log('epty')
                break;
        }

    return (
        <div  className={'w-20 p-2 flex justify-center items-center'}>
        <a href={iconLink}>
        <div className={'text-4xl flex justify-center flex-col items-center w-full'} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
            <IconContext.Provider value={{className: "custom-transition" }}>
                <div>
                    {iconRender}
                </div>
            </IconContext.Provider>
            <h3 className={`text-lg text-gray-400 custom-transition ${!mouseOver ? " opacity-0 max-h-0" : "opacity-100 max-h-12" }` }>{icon}</h3>

        </div>
        </a>
        </div>
    );
}

export default SocialIcon;
