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
`;

export default HeaderStyled;
