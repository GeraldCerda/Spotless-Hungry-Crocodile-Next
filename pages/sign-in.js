import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import SignIn8 from '../components/sign-in8'

const SignIn = (props) => {
  return (
    <>
      <div className="sign-in-container">
        <Head>
          <title>Sign-In - Spotless Hungry Crocodile</title>
          <meta
            property="og:title"
            content="Sign-In - Spotless Hungry Crocodile"
          />
        </Head>
        <SignIn8
          action1={
            <Fragment>
              <span className="sign-in-text1">Sign in</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="sign-in-text2">Sign in</span>
            </Fragment>
          }
        ></SignIn8>
      </div>
      <style jsx>
        {`
          .sign-in-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sign-in-text1 {
            display: inline-block;
          }
          .sign-in-text2 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default SignIn
