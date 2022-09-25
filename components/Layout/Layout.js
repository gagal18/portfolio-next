
import React from "react";


import Head from "./Head";
import Navbar from "./Navbar";



const Layout = (props) => {

    return (
        <>
            <Head />
            <div className={"w-full"}>
                <Navbar/>
                <main>{props.children}</main>
            </div>
        </>
    );

}

export default Layout;
