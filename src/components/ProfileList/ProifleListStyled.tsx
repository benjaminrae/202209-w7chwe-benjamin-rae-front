import styled from "styled-components";

const ProfileListStyled = styled.main`
  .profile-list {
    &__list {
      display: grid;
      gap: 2rem;
    }
    &__filter {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
  }

  @media only screen and (min-width: 560px) {
    .profile-list {
      &__list {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media only screen and (min-width: 815px) {
    .profile-list {
      &__list {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  @media only screen and (min-width: 1065px) {
    .profile-list {
      &__list {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default ProfileListStyled;
