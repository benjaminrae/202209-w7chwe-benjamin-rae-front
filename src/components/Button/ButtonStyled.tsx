import styled from "styled-components";
import sizes from "../../styles/sizes";

const ButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.colorPrimary};
  border: 2px solid ${(props) => props.theme.colorPrimary};
  border-radius: 0.5rem;
  padding: ${sizes.button.padding};
  &:hover {
    color: ${(props) => props.theme.colorPrimary};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  &.button--inverted {
    color: ${(props) => props.theme.colorPrimary};
    background-color: ${(props) => props.theme.backgroundColor};
    &:hover {
      color: ${(props) => props.theme.backgroundColor};
      background-color: ${(props) => props.theme.colorPrimary};
    }
  }
`;

export default ButtonStyled;
