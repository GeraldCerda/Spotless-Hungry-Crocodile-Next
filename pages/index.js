import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Banner1 from '../components/banner1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Spotless Hungry Crocodile</title>
        </Head>
        <Navbar></Navbar>
        <Banner1
          action1={
            <Fragment>
              <span className="home-text1">Get Started</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text2">
                Scan your Spotify songs for missing track registrations
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text3">
                Manage Your Music Rights with AI Technology
              </span>
            </Fragment>
          }
        ></Banner1>
        <CTA></CTA>
        <Features2
          feature1Title="AI-Powered Music Registrar Service"
          feature3Title="Register Your Song with Ease"
          feature1Description="Effortless Music Registration Instantly upload your entire Spotify or SoundCloud catalog with one click. Our platform identifies all your tracks and makes sure every song gets the protection it deserves—no paperwork, no confusion."
          feature3Description="Let the AI register your song to the proper registries with just one click!"
        ></Features2>
        <Pricing></Pricing>
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
          .home-text1 {
            display: inline-block;
          }
          .home-text2 {
            display: inline-block;
          }
          .home-text3 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
