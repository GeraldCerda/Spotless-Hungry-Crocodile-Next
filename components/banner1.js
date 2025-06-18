import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner1 = (props) => {
  return (
    <>
      <div className="banner1-container1 thq-section-padding">
        <div className="banner1-max-width thq-section-max-width">
          <div className="banner1-container2">
            <h2 className="banner1-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="banner1-text3">
                    Manage Your Music Rights with AI Technology
                  </span>
                </Fragment>
              )}
            </h2>
            <h3 className="banner1-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="banner1-text5">
                    Scan your Spotify songs for missing track registrations
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="banner1-text4">Get Started</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner1-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner1-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-title {
            text-align: center;
          }
          .banner1-text1 {
            text-align: center;
          }
          .banner1-text3 {
            display: inline-block;
          }
          .banner1-text4 {
            display: inline-block;
          }
          .banner1-text5 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Banner1.defaultProps = {
  heading1: undefined,
  action1: undefined,
  content1: undefined,
}

Banner1.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default Banner1
