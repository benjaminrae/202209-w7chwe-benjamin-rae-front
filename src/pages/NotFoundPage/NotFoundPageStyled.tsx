import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .not-found {
    &__title {
      text-align: center;
    }
    &__logo {
      max-height: 50vh;
    }
  }
`;

export default NotFoundPageStyled;
