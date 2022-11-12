import styled from "styled-components";

const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);

  .modal {
    &__container {
      background-color: ${(props) => props.theme.backgroundColor};
      padding: 2rem;
      border: 2px solid currentColor;
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
    &__title {
      font-size: 1.5rem;
      font-weight: 800;
    }
    &__icon {
      font-size: 2rem;
    }
  }
`;

export default ModalStyled;
