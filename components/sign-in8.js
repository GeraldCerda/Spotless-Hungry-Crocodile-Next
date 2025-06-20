import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SignIn8 = (props) => {
  return (
    <>
      <div className="sign-in8-container1">
        <div className="sign-in8-max-width thq-section-max-width">
          <div className="sign-in8-container2"></div>
          <div className="sign-in8-form-root thq-section-padding">
            <div className="sign-in8-container3">
              <p className="sign-in8-text10 thq-body-large">
                Don&apos;t have an account? Sign up
              </p>
            </div>
            <div className="sign-in8-form1">
              <h2 className="thq-heading-2 sign-in8-text11">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-in8-text20">Sign in</span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-in8-container4">
                <button className="sign-in8-button1 thq-button-outline">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="sign-in8-icon1"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <span className="thq-body-small">Continue with Facebook</span>
                </button>
                <button className="sign-in8-button2 thq-button-outline">
                  <svg
                    viewBox="0 0 860.0137142857142 1024"
                    className="sign-in8-icon3"
                  >
                    <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
                  </svg>
                  <span className="thq-body-small">Continue with Google</span>
                </button>
              </div>
              <div className="sign-in8-divider1">
                <div className="sign-in8-divider2"></div>
                <p className="thq-body-large">OR</p>
                <div className="sign-in8-divider3"></div>
              </div>
              <form className="sign-in8-form2">
                <div className="sign-in8-email">
                  <label
                    htmlFor="thq-sign-in-8-email"
                    className="thq-body-large"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="thq-sign-in-8-email"
                    required="true"
                    placeholder="Email address"
                    className="sign-in8-textinput1 thq-input thq-body-large"
                  />
                </div>
                <div className="sign-in8-password">
                  <div className="sign-in8-textfield">
                    <div className="sign-in8-container5">
                      <label
                        htmlFor="thq-sign-in-8-password"
                        className="thq-body-large"
                      >
                        Password
                      </label>
                      <div className="sign-in8-hide-password">
                        <svg viewBox="0 0 1024 1024" className="sign-in8-icon5">
                          <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                        </svg>
                        <span className="thq-body-small">Hide</span>
                      </div>
                    </div>
                    <input
                      type="password"
                      id="thq-sign-in-8-password"
                      required="true"
                      placeholder="Password"
                      className="sign-in8-textinput2 thq-input thq-body-large"
                    />
                  </div>
                  <a
                    href="https://teleporthq.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sign-in8-link thq-body-small"
                  >
                    Forgot password
                  </a>
                </div>
              </form>
              <button
                type="submit"
                className="sign-in8-button3 thq-button-filled"
              >
                <span className="sign-in8-text18 thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="sign-in8-text19">Sign in</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sign-in8-container1 {
            width: 100%;
            height: 800px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sign-in8-max-width {
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .sign-in8-container2 {
            width: 349px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .sign-in8-form-root {
            gap: var(--dl-layout-space-unit);
            width: 50%;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in8-container3 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in8-text10 {
            align-self: flex-end;
          }
          .sign-in8-form1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in8-container4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in8-button1 {
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
          .sign-in8-icon1 {
            width: 24px;
            height: 24px;
          }
          .sign-in8-button2 {
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
          .sign-in8-icon3 {
            width: 24px;
            height: 24px;
          }
          .sign-in8-divider1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .sign-in8-divider2 {
            flex: 1;
            width: var(--dl-layout-size-medium);
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-primary1);
          }
          .sign-in8-divider3 {
            flex: 1;
            width: auto;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-primary1);
          }
          .sign-in8-form2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .sign-in8-email {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .sign-in8-textinput1 {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-in8-password {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in8-textfield {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .sign-in8-container5 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .sign-in8-hide-password {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 1;
            justify-content: center;
          }
          .sign-in8-icon5 {
            fill: var(--dl-color-theme-neutral-dark);
            width: 24px;
            height: 24px;
          }
          .sign-in8-textinput2 {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-in8-link {
            align-self: flex-end;
            text-decoration: underline none;
          }
          .sign-in8-button3 {
            width: 100%;
          }
          .sign-in8-text18 {
            text-align: center;
          }
          .sign-in8-text19 {
            display: inline-block;
          }
          .sign-in8-text20 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .sign-in8-container1 {
              gap: var(--dl-layout-space-twounits);
              height: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .sign-in8-max-width {
              height: auto;
              flex-direction: column;
            }
            .sign-in8-container2 {
              width: 100%;
              height: auto;
            }
            .sign-in8-form-root {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .sign-in8-container3 {
              align-items: center;
            }
          }
          @media (max-width: 479px) {
            .sign-in8-container2 {
              display: none;
            }
            .sign-in8-text10 {
              align-self: flex-start;
              text-align: center;
            }
            .sign-in8-text11 {
              text-align: center;
            }
            .sign-in8-button1 {
              width: 100%;
            }
            .sign-in8-button2 {
              width: 100%;
            }
            .sign-in8-button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

SignIn8.defaultProps = {
  action1: undefined,
  heading1: undefined,
}

SignIn8.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default SignIn8
