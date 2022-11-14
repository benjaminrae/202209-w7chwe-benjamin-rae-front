import Button from "../Button/Button";
import EditProfileFormStyled from "./EditProfileFormStyled";
import { ReactComponent as Edit } from "../../resources/svgs/edit.svg";
import React, { useState } from "react";

export interface EditProfileData {
  location: string;
  birthday: string;
  bio: string;
  image: FileList;
}

const initialEditProfileData: EditProfileData = {
  bio: "",
  birthday: "",
  location: "",
  image: {} as FileList,
};

const EditProfileForm = () => {
  const [editProfileData, setEditProfileData] = useState(
    initialEditProfileData
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditProfileData((previousData) => ({
      ...previousData,
      [event.target.id]:
        event.target.id === "image"
          ? (event.target as HTMLInputElement).files![0]
          : event.target.value,
    }));
  };

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
            value={editProfileData.location}
            onChange={handleChange}
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
            value={editProfileData.birthday}
            onChange={handleChange}
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
            value={editProfileData.bio}
            onChange={handleChange}
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
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <Button text="Save Changes" />
      </form>
    </EditProfileFormStyled>
  );
};

export default EditProfileForm;
