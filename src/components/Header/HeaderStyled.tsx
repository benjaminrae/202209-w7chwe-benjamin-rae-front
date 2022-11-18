import styled from "styled-components";
import sizes from "../../styles/sizes";

const HeaderStyled = styled.header`
  padding: ${sizes.header.paddingVertical} 0;
  display: flex;
  .main-header {
    &__title {
      flex: 1;
    }
  }
  .active {
    text-decoration: underline;
  }

  @media only screen and (min-width: 500px) {
    nav > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }
`;

export default HeaderStyled;
