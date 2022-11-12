import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
 
}

html {
  font-family: "Poppins", sans-serif;
}

img {
  display: block;
  max-width: 100%;
}

ul {
    list-style: none;
    list-style-position: outside;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
  

`;

export default GlobalStyles;
