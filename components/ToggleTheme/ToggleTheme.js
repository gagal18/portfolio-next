import React from 'react';
import {useTheme} from "next-themes";
import {IoGlassesOutline, IoIosGlasses} from "react-icons/io";
import {GiSunglasses} from "react-icons/gi";
import {BsEyeglasses} from "react-icons/bs";

function ToggleTheme() {
    const { theme, setTheme } = useTheme()
    console.log(theme)
    return (
        <div className={"absolute top-12 -right-24 lg:right-32 z-50"}>
            {theme === "dark" ?<button className={"dark:text-black text-9xl"} onClick={() => setTheme('light')}><IoIosGlasses /></button> : null }
            {theme === "light" ?<button className={"dark:text-black text-9xl"} onClick={() => setTheme('dark')}><BsEyeglasses /></button> : null }
        </div>
    );
}

export default ToggleTheme;
