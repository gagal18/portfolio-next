import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body className={"transition-colors duration-700 bg-white dark:bg-black"}>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
