import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar = (props) => {
  return (
    <>
      <header className="navbar-container">
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar-image1"
          />
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links1">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
            </nav>
            <div className="navbar-buttons1">
              <button className="navbar-action11 thq-button-filled thq-button-animated">
                <Link href="/sign-in">
                  <a className="navbar-link6 thq-body-small">
                    <span>Login</span>
                    <br></br>
                  </a>
                </Link>
              </button>
              <Link href="/sign-up">
                <a className="navbar-link7 thq-button-animated thq-button-outline">
                  <span className="thq-body-small">Signup</span>
                </a>
              </Link>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar-logo"
                />
                <div data-thq="thq-close-menu" className="navbar-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-links2">
                <span className="thq-body-small thq-link">{props.link1}</span>
                <span className="thq-body-small thq-link">{props.link2}</span>
                <span className="thq-body-small thq-link">{props.link3}</span>
                <span className="thq-body-small thq-link">{props.link4}</span>
                <span className="thq-body-small thq-link">{props.link5}</span>
              </nav>
            </div>
            <div className="navbar-buttons2">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .navbar-image1 {
            height: 3rem;
          }
          .navbar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-buttons1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar-action11 {
            display: flex;
            flex-direction: row;
          }
          .navbar-link6 {
            text-decoration: none;
          }
          .navbar-link7 {
            display: flex;
            flex-direction: row;
            text-decoration: none;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo {
            height: 3rem;
          }
          .navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-buttons2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
          }
          @media (max-width: 767px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .navbar-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  link3: 'Pricing',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link1: 'Home',
  action1: 'Login',
  link5: 'Sign Up',
  action2: 'Get Started',
  link2: 'How It Works',
  logoAlt: 'AI Music Registrar',
  link4: 'FAQ',
}

Navbar.propTypes = {
  link3: PropTypes.string,
  logoSrc: PropTypes.string,
  link1: PropTypes.string,
  action1: PropTypes.string,
  link5: PropTypes.string,
  action2: PropTypes.string,
  link2: PropTypes.string,
  logoAlt: PropTypes.string,
  link4: PropTypes.string,
}

export default Navbar
