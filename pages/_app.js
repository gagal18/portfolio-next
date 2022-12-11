import React from 'react'
import App from 'next/app'
import { TerminalContextProvider } from "react-terminal";
import { ThemeProvider } from 'next-themes'

import '/styles/globals.css'
import Layout from "/components/Layout/Layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return(
    <ThemeProvider defaultTheme="dark" attribute="class">
      <TerminalContextProvider>
        <Layout><Component {...pageProps} /></Layout>
      </TerminalContextProvider>
    </ThemeProvider>
    )
  }
}

export default MyApp
