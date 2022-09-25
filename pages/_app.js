import React from 'react'
import App from 'next/app'
import { TerminalContextProvider } from "react-terminal";
import '/styles/globals.css'
import Layout from "/components/Layout/Layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <TerminalContextProvider><Layout><Component {...pageProps} /></Layout></TerminalContextProvider>
  }
}

export default MyApp
