import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Spotless Hungry Crocodile</title>
        </Head>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
