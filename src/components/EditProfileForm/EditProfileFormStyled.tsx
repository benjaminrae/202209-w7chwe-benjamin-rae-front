import styled from "styled-components";

const EditProfileFormStyled = styled.div`
  .edit-profile {
    &__icon {
      display: none;
    }
  }

  @media only screen and (min-width: 460px) {
  }

  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .edit-profile {
      &__icon {
        display: block;
        flex: 1;
        max-height: 60vh;
      }
    }
  } ;
`;

export default EditProfileFormStyled;
