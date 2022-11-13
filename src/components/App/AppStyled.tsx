import styled from "styled-components";

const AppStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorPrimary};
  padding: 32px ${(props) => props.theme.paddingHorizontal};
  min-height: 100vh;
  width: 100%;
`;

export default AppStyled;
