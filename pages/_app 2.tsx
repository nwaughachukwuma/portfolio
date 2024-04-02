import React from 'react'
import '../styles/tailwind.css'

type Props = {
    Component: any
    pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
    return <Component {...pageProps} />
}

export default MyApp