import styled from "styled-components";

const ProfileCardStyled = styled.li`
  display: flex;
  flex-direction: column-reverse;
  padding: 2rem;
  gap: 2rem;
  border: 2px solid ${(props) => props.theme.colorPrimary};
  border-radius: 0.5rem;
  .profile-card {
    &__info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: space-between;
    }
    &__buttons {
      display: flex;
      gap: 1rem;
      justify-self: flex-end;
    }
    &__image {
      object-fit: cover;
      object-position: top;
      border-radius: 0.5rem;
      aspect-ratio: 1;
    }
  }
  .button {
    padding: 1rem;
    border-radius: 50%;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 500px) {
    flex-direction: row;
    .profile-card {
      &__info {
      }
    }
  }
`;

export default ProfileCardStyled;
