import { createGlobalStyle } from 'styled-components'

import { themes } from '@styles/ColorStyles'

export const GlobalStyles = createGlobalStyle`
  :root {
    --backdrop-blur: 20px;
    --inset-white-box-shadow: inset 0px 0px 0px 0.5px rgb(255 255 255 / 0.2);
    --transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    line-height: 1.2;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	  display: block;
  }

  body {
    line-height: 1.6;
  }

  ol, ul {
	  list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after, q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    overflow-y: scroll;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(8 8 8 / 1);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    width: fit-content;
    text-decoration: none;
  }

  body {
    background: ${themes.light.backgroundColor};
    
    @media (prefers-color-scheme: dark) {
      background: ${themes.dark.backgroundColor};
    }
  }
`
