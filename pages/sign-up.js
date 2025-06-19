import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import SignUp4 from '../components/sign-up4'

const SignUp = (props) => {
  return (
    <>
      <div className="sign-up-container">
        <Head>
          <title>Sign-Up - Spotless Hungry Crocodile</title>
          <meta
            property="og:title"
            content="Sign-Up - Spotless Hungry Crocodile"
          />
        </Head>
        <SignUp4
          action2={
            <Fragment>
              <span className="sign-up-text1">Continue with Facebook</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="sign-up-text2">Create an account</span>
            </Fragment>
          }
          action3={
            <Fragment>
              <span className="sign-up-text3">Continue with Google</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="sign-up-text4">
                Enter your email address to create an account
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="sign-up-text5">Create an account</span>
            </Fragment>
          }
        ></SignUp4>
      </div>
      <style jsx>
        {`
          .sign-up-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sign-up-text1 {
            display: inline-block;
          }
          .sign-up-text2 {
            display: inline-block;
          }
          .sign-up-text3 {
            display: inline-block;
          }
          .sign-up-text4 {
            display: inline-block;
          }
          .sign-up-text5 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default SignUp
