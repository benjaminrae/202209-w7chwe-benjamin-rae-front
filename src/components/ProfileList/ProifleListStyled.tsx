import styled from "styled-components";

const ProfileListStyled = styled.main`
  .profile-list {
    &__list {
      display: grid;
      gap: 2rem;
    }
  }

  @media only screen and (min-width: 500px) {
    .profile-list {
      &__list {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media only screen and (min-width: 750px) {
    .profile-list {
      &__list {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  @media only screen and (min-width: 1000px) {
    .profile-list {
      &__list {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default ProfileListStyled;
