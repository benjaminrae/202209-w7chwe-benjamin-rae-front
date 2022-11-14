import styled from "styled-components";

const AppStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorPrimary};
  padding: 0 ${(props) => props.theme.paddingHorizontal};
  padding-bottom: 4em;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (min-width: 1300px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default AppStyled;
