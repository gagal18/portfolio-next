import React, {useState} from 'react';
import { IconContext } from "react-icons";

import {FaReact} from "react-icons/fa";
import {SiGatsby, SiJavascript, SiNextdotjs, SiRedux, SiWordpress, SiCplusplus, SiC} from "react-icons/si";
import {GrWordpress} from "react-icons/gr";


function CircleItem({icon, ...rest}) {
    const [mouseOver, setMouseOver] = useState(false)
    let iconRender

    switch (icon) {
        case "React": {
            iconRender = <FaReact color={mouseOver ? "#A6DFFF" : "#A6DFFF"}/>
        }break;
        case "JavaScript": {
            iconRender = <SiJavascript color={mouseOver ? "#F0DB4F" :  "#F0DB4F"}/>
        }break;
        case "Redux": {
            iconRender = <SiRedux color={mouseOver ? "#764ABC" :  "#764ABC"}/>
        }break;
        case "Next": {
            iconRender = <SiNextdotjs color={mouseOver ? "#717171" :  "#717171"}/>
        }break;
        case "WordPress": {
            iconRender = <SiWordpress color={mouseOver ? "#00749A" :  "#00749A"}/>
        }break;
        case "Gatsby": {
            iconRender = <SiGatsby color={mouseOver ? "#663399" :  "#663399"}/>
        }break;        
        case "CPP": {
            iconRender = <SiCplusplus color={mouseOver ? "#00599C" :  "#00599C"}/>
        }break;
        case "C": {
            iconRender = <SiC color={mouseOver ? "#00599C" :  "#00599C"}/>
        }break;

    }
    const mystyle = {
        transform: `rotate(${rest.deg}deg) translate(100px) rotate(-${rest.deg}deg)`
    };
    return (
        <div className={`absolute rounded-full bg-black duration-700 custom-transition w-16 h-16 p-2 flex justify-center items-center`} style={mystyle}>
                <div className={'text-4xl flex justify-center flex-col items-center w-full'} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
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
