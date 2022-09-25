
import React from "react";


import Head from "/components/Layout/Head";
import Navbar from "/components/Layout/Navbar";



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
