import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/animate.css@4.1.1/animate.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
            data-tag="font"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            data-tag="font"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            data-tag="font"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:wght@400;500;600;700&display=swap"
            data-tag="font"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
          />
          <style
            data-tag="reset-style-sheet"
            dangerouslySetInnerHTML={{
              __html: `
                html { line-height: 1.15; scroll-behavior: smooth; }
                body { margin: 0; font-family: Inter, sans-serif; background: var(--dl-color-theme-neutral-light); color: var(--dl-color-theme-neutral-dark); font-size: 16px; font-weight: 400; }
                *, *::before, *::after { box-sizing: border-box; border-width: 0; border-style: solid; -webkit-font-smoothing: antialiased; }
                p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption { margin: 0; padding: 0; }
                button { background-color: transparent; }
                button,input,optgroup,select,textarea { font-family: inherit; font-size: 100%; line-height: 1.15; margin: 0; }
                button,select { text-transform: none; }
                button,[type="button"],[type="reset"],[type="submit"] { -webkit-appearance: button; color: inherit; }
                button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner { border-style: none; padding: 0; }
                button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus { outline: 1px dotted ButtonText; }
                a { color: inherit; text-decoration: none; }
                input { padding: 2px 4px; }
                img { display: block; }
                details { display: block; margin: 0; padding: 0; }
                summary::-webkit-details-marker { display: none; }
                [data-thq="accordion"] [data-thq="accordion-content"] { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-in-out; padding: 0; }
                [data-thq="accordion"] details[data-thq="accordion-trigger"][open] + [data-thq="accordion-content"] { max-height: 1000vh; }
                details[data-thq="accordion-trigger"][open] summary [data-thq="accordion-icon"] { transform: rotate(180deg); }
              `,
            }}
          />
          <style
            data-tag="default-style-sheet"
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  font-style: normal;
                  text-decoration: none;
                  text-transform: none;
                  letter-spacing: normal;
                  line-height: 1.15;
                  fill: var(--dl-color-theme-neutral-dark);
                }
              `,
            }}
          />
          <noscript>
            <style>
              {`@keyframes fade-in-left {
                  0% { opacity: 0; transform: translateX(-20px); }
                  100% { opacity: 1; transform: translateX(0); }
                }`}
            </style>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<script data-section-id='navbar' src='https://unpkg.com/@teleporthq/teleport-custom-scripts'></script>",
            }}
          />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
