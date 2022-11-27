import React from "react";
import Head from "next/head";

const HeadLinks = (props) => {
    let href = "";


    if (typeof window !== "undefined") {
        href = window.location.href;
    }

    return (
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="theme-color" content="#ffffff" />
            <title>Bojan&apos;s Portfolio</title>
            <meta property="og:title" content={"Bojan's Portfolio"} />
            <meta property="og:url" content={href} />
            <meta property="og:type" content="website" />
        </Head>
    );
};

export default HeadLinks;
