import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

const baseStyles = () => injectGlobal`
  ${reset }
  * { box-sizing: border-box; text-rendering: optimizeLegibility; }
html, body { min-height: 100vh; margin: 0; }

div,
html,
body,
nav,
header,
hgroup,
footer,
section,
article {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  vertical-align: baseline;
  line-height: 1.2;
  font-size: 1em;
}
  /* other styles */
  body{
    background-color: #eae8e7;
    font-family: 'Source Sans Pro', sans-serif;
    flex-direction: row;
    font-size: 12pt;
    @media only screen and (min-width: 768px) {
      padding-left: 500px
    }
    > div{
      width: 100%;
    }
  }

  h1,h2,h3,h4,h5,h6, .title, .heading{
    font-family: 'Alegreya', sans-serif;
    font-family: 700;
  }

  a, a:hover, a:active, a:visited{
    text-decoration: none;
    color: #00A8E8
  }

  h6{
    font-size: 1.1em;
  }
  h5{
    font-size: 1.2em;
  }
  h4{
    font-size: 1.3em;
  }
  h3,.heading{
    font-size: 1.4em;
  }
  h2{
    font-size: 1.5em;
  }
  h1, .title, {
    font-size: 1.6em;
  }

  p{
    text-align: justify;
  }
`;

export default baseStyles;
