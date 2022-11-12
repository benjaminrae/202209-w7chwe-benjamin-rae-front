import { hideModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  text: string;
  isError: boolean;
}

const Modal = ({ text, isError }: ModalProps) => {
  const dispatch = useAppDispatch();

  return (
    <ModalStyled className="modal">
      <div className="modal__container">
        <span className="modal__icon">{isError ? "❌" : "✅"}</span>
        <span className="modal__title">{isError ? "Oops!" : "Success!"}</span>
        <span className="modal__text">{text}</span>
        <Button
          text="Close"
          action={() => {
            dispatch(hideModalActionCreator());
          }}
        />
      </div>
    </ModalStyled>
  );
};

export default Modal;
