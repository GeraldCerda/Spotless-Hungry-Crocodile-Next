import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-header78 ${props.rootClassName} `}>
        <div className="hero-column thq-section-padding thq-section-max-width">
          <div className="hero-content1">
            <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
            <p className="hero-text2 thq-body-large">{props.content1}</p>
          </div>
          <div className="hero-actions">
            <button className="thq-button-filled hero-button1">
              <span className="thq-body-small">{props.action1}</span>
            </button>
            <button className="thq-button-outline hero-button2">
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </div>
        </div>
        <div className="hero-content2">
          <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="hero-strip1 thq-animated-group-horizontal"></div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
          <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="hero-strip3 thq-animated-group-horizontal-reverse"></div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
        </div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from { transform: translateX(0);}
    to { transform: translateX(calc(-100% - 16px));}
  }
  @keyframes scroll-y {
    from { transform: translateY(0);}
    to { transform: translateY(calc(-100% - 16px));}
  }
</style>`}
          />
        </div>
      </div>

      <style jsx>
        {`
          .hero-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero-text1 {
            text-align: center;
          }
          .hero-text2 {
            text-align: center;
          }
          .hero-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
          }
          .hero-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-row-container1 {
            width: 100%;
          }
          .hero-strip1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .hero-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero-row-container2 {
            width: 100%;
          }
          .hero-strip3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .hero-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero-container2 {
            display: contents;
          }
          @media (max-width: 767px) {
            .hero-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero-button1 {
              width: 100%;
            }
            .hero-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  image9Src:
    'https://images.unsplash.com/photo-1535740560992-3a223ab7ef78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDIxODg5OXw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: 'AI-Powered Music Registrar',
  image8Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1507838153414-b4b713384a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDIxODkwMHw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDIxODg5N3w&ixlib=rb-4.1.0&q=80&w=1080',
  rootClassName: '',
  image1Alt: 'AI-Powered Music Registrar Image',
  image11Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  content1:
    'Connect your Spotify account and let our AI scan your songs to check all registrars. Register missing tracks for only $2/month.',
  image5Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1507838153414-b4b713384a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDIxODg5OXw&ixlib=rb-4.1.0&q=80&w=1080',
  image11Src:
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDIxODg5OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1506423456648-c11ccb27338d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDIxODg5OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image9Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  action1: 'Get Started',
  image2Alt: 'Hero Image',
  action2: 'Secondary action',
  image3Src:
    'https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDIxODg5N3w&ixlib=rb-4.1.0&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1523713947078-b1787c791b96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDIxODg5OXw&ixlib=rb-4.1.0&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1489602642804-64dea1e3ebc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDIxODg5OXw&ixlib=rb-4.1.0&q=80&w=1080',
  image10Src:
    'https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDIxODkwMHw&ixlib=rb-4.1.0&q=80&w=1080',
  image7Alt: 'Hero Image',
}

Hero.propTypes = {
  image9Src: PropTypes.string,
  heading1: PropTypes.string,
  image8Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image1Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.string,
  image5Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image11Src: PropTypes.string,
  image7Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  action1: PropTypes.string,
  image2Alt: PropTypes.string,
  action2: PropTypes.string,
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  image8Src: PropTypes.string,
  image10Src: PropTypes.string,
  image7Alt: PropTypes.string,
}

export default Hero
