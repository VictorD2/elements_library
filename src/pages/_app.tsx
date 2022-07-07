import React from 'react'
import '../../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import type { AppProps } from 'next/app'
import UserLayout from '../layout/UserLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserLayout>
      <Component {...pageProps} />
    </UserLayout>
  )
}

export default MyApp
