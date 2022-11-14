import { createGlobalStyle } from "styled-components";
import colors from "./colors";

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

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form__title {

}

.form__group {
  display: flex;
  flex-direction: column
}

.form__input {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${colors.navyBlue};
}

.form__link {
  font-weight: 800;
}

.form__input--file::-webkit-file-upload-button {
    visibility: hidden;
  }
  .form__input--file::before {
    content: "Select some files";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  .form__input--file:hover::before {
    border-color: black;
  }
  .form__input--file:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;

export default GlobalStyles;
