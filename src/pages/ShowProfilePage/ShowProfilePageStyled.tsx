import styled from "styled-components";

const ShowProfilePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .profile-page {
    &__avatar {
      object-fit: cover;
      object-position: top;
      border-radius: 0.5rem;
      aspect-ratio: 1;
      max-width: 100%;
      max-height: 60vh;
    }
  }
`;

export default ShowProfilePageStyled;
