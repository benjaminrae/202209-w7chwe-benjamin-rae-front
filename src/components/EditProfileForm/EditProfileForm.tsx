import Button from "../Button/Button";
import EditProfileFormStyled from "./EditProfileFormStyled";
import { ReactComponent as Edit } from "../../resources/svgs/edit.svg";

const EditProfileForm = () => {
  return (
    <EditProfileFormStyled>
      <Edit className="edit-profile__icon" />
      <form className="edit-profile__container form">
        <h2 className="edit-profile__title form__title">Edit your profile</h2>
        <div className="edit-profile__form-group form__group">
          <label htmlFor="location" className="edit-profile__label form__label">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="edit-profile__input form__input"
            autoComplete="off"
          />
        </div>
        <div className="edit-profile__form-group form__group">
          <label htmlFor="birthday" className="edit-profile__label form__label">
            Birthday
          </label>
          <input
            type="date"
            id="birthday"
            className="edit-profile__input form__input"
            autoComplete="off"
          />
        </div>
        <div className="edit-profile__form-group form__group">
          <label htmlFor="bio" className="edit-profile__label form__label">
            Bio
          </label>
          <textarea
            id="bio"
            rows={5}
            className="edit-profile__input form__input"
            autoComplete="off"
          />
        </div>
        <div className="edit-profile__form-group form__group">
          <label htmlFor="image" className="edit-profile__label form__label">
            Avatar
          </label>
          <input
            type="file"
            id="image"
            className="edit-profile__input form__input form__input--file"
            autoComplete="off"
          />
        </div>
        <Button text="Save Changes" />
      </form>
    </EditProfileFormStyled>
  );
};

export default EditProfileForm;
