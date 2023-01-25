import React, {useState} from 'react';
import { IconContext } from "react-icons";

import {FaReact} from "react-icons/fa";
import {SiGatsby, SiJavascript, SiNextdotjs, SiRedux, SiWordpress, SiCplusplus, SiC} from "react-icons/si";


function CircleItem({icon, ...rest}) {
    let iconRender

    switch (icon) {
        case "React": {
            iconRender = <FaReact color={"#A6DFFF"}/>
        }break;
        case "JavaScript": {
            iconRender = <SiJavascript color={"#F0DB4F"}/>
        }break;
        case "Redux": {
            iconRender = <SiRedux color={"#764ABC"}/>
        }break;
        case "Next": {
            iconRender = <SiNextdotjs color={"#717171"}/>
        }break;
        case "WordPress": {
            iconRender = <SiWordpress color={"#00749A"}/>
        }break;
        case "Gatsby": {
            iconRender = <SiGatsby color={"#663399"}/>
        }break;
        case "CPP": {
            iconRender = <SiCplusplus color={"#00599C"}/>
        }break;
        case "C": {
            iconRender = <SiC color={"#00599C"}/>
        }break;

    }
    const mystyle = {
        transform: `rotate(${rest.deg}deg) translate(100px) rotate(-${rest.deg}deg)`
    };
    return (
        <div className={`absolute rounded-full bg-black dark:bg-gray-800 duration-700 custom-transition w-16 h-16 p-2 flex justify-center items-center`} style={mystyle}>
                <div className={'text-4xl flex justify-center flex-col items-center w-full'}>
                    <IconContext.Provider value={{className: "custom-transition" }}>
                        <div>
                            {iconRender}
                        </div>
                    </IconContext.Provider>
                </div>
        </div>
    );
}

export default CircleItem;
