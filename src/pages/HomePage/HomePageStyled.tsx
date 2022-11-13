import styled from "styled-components";

const HomePageStyled = styled.div`
  .home-page {
    &__cta {
      display: none;
    }
  }

  @media only screen and (min-width: 800px) {
    display: flex;
    gap: 2rem;

    .home-page {
      &__cta {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 2rem;
        max-height: 70vh;
      }
    }
  }
`;

export default HomePageStyled;
