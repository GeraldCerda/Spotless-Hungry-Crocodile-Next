import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SignUp4 = (props) => {
  return (
    <>
      <div className="sign-up4-container1">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="sign-up4-sign-up-image thq-img-ratio-16-9"
        />
        <div className="sign-up4-container2"></div>
        <div className="sign-up4-max-width thq-section-max-width">
          <div className="sign-up4-form1 thq-section-padding">
            <div className="sign-up4-title-root">
              <h2 className="sign-up4-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-up4-text24">Create an account</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large sign-up4-text11">
                Already have an account? Sign in
              </p>
            </div>
            <div className="sign-up4-container3">
              <button className="sign-up4-button1 thq-button-outline">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="sign-up4-icon1"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="sign-up4-text20">
                        Continue with Facebook
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="sign-up4-button2 thq-button-outline">
                <svg
                  viewBox="0 0 860.0137142857142 1024"
                  className="sign-up4-icon3"
                >
                  <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.action3 ?? (
                    <Fragment>
                      <span className="sign-up4-text22">
                        Continue with Google
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="sign-up4-divider1">
              <div className="sign-up4-divider2"></div>
              <p className="thq-body-large">OR</p>
              <div className="sign-up4-divider3"></div>
            </div>
            <span className="sign-up4-text15 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="sign-up4-text23">
                    Enter your email address to create an account
                  </span>
                </Fragment>
              )}
            </span>
            <form className="sign-up4-form2">
              <div className="sign-up4-email">
                <label htmlFor="thq-sign-up-4-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-up-4-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-up4-textinput thq-input thq-body-large"
                />
              </div>
            </form>
            <div className="sign-up4-container4">
              <div className="sign-up4-terms-agree">
                <input
                  type="checkbox"
                  id="thq-sign-up-4-terms"
                  checked="true"
                  className="thq-checkbox"
                />
                <label htmlFor="thq-sign-up-4-terms" className="thq-body-large">
                  Agree to our Terms of use and Privacy Policy.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </label>
              </div>
              <div className="sign-up4-newsletter">
                <input
                  type="checkbox"
                  id="thq-sign-up-4-newsletter"
                  checked="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="thq-sign-up-4-newsletter"
                  className="thq-body-large"
                >
                  Subscribe to our newsletter
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="sign-up4-button3 thq-button-filled"
            >
              <span className="sign-up4-text19 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="sign-up4-text21">Create an account</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sign-up4-container1 {
            width: 100%;
            height: 900px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sign-up4-sign-up-image {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .sign-up4-container2 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            z-index: 10;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .sign-up4-max-width {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .sign-up4-form1 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .sign-up4-title-root {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .sign-up4-text10 {
            text-align: center;
          }
          .sign-up4-container3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-up4-button1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
          }
          .sign-up4-icon1 {
            width: 24px;
            height: 24px;
          }
          .sign-up4-button2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
          }
          .sign-up4-icon3 {
            width: 24px;
            height: 24px;
          }
          .sign-up4-divider1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .sign-up4-divider2 {
            flex: 1;
            width: var(--dl-layout-size-medium);
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-primary1);
          }
          .sign-up4-divider3 {
            flex: 1;
            width: var(--dl-layout-size-medium);
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-primary1);
          }
          .sign-up4-text15 {
            text-align: center;
          }
          .sign-up4-form2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .sign-up4-email {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .sign-up4-textinput {
            width: 100%;
          }
          .sign-up4-container4 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-up4-terms-agree {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
          }
          .sign-up4-newsletter {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
          }
          .sign-up4-button3 {
            width: 100%;
          }
          .sign-up4-text19 {
            text-align: center;
          }
          .sign-up4-text20 {
            display: inline-block;
          }
          .sign-up4-text21 {
            display: inline-block;
          }
          .sign-up4-text22 {
            display: inline-block;
          }
          .sign-up4-text23 {
            display: inline-block;
          }
          .sign-up4-text24 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .sign-up4-container1 {
              gap: var(--dl-layout-space-twounits);
              height: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .sign-up4-max-width {
              width: 100%;
              padding: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .sign-up4-max-width {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .sign-up4-form1 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .sign-up4-text10 {
              text-align: center;
            }
            .sign-up4-text11 {
              text-align: center;
            }
            .sign-up4-button1 {
              width: 100%;
            }
            .sign-up4-button2 {
              width: 100%;
            }
            .sign-up4-button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

SignUp4.defaultProps = {
  action2: undefined,
  action1: undefined,
  action3: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1495305379050-64540d6ee95d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDI5Mjk1OXw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
  image1Alt: 'SignUp Image',
}

SignUp4.propTypes = {
  action2: PropTypes.element,
  action1: PropTypes.element,
  action3: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default SignUp4
