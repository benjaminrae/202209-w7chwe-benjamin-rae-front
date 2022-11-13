import { ProfileStructure } from "../../redux/features/userSlice/types";
import getAge from "../../utils/getAge";
import Button from "../Button/Button";
import ProfileCardStyled from "./ProfileCardStyled";
import { ReactComponent as Avatar } from "../../resources/svgs/avatar.svg";

interface ProfileCardProps {
  profile: ProfileStructure;
}

const ProfileCard = ({
  profile: { location, username, backupImage, birthday },
}: ProfileCardProps) => {
  return (
    <ul>
      <ProfileCardStyled>
        <div className="profile-card__info">
          <h3>
            {username}, {getAge(birthday!) ?? "?"}
          </h3>
          <div>{location}</div>
          <div className="profile-card__buttons">
            <Button text="👎" aria-label="Add user to enemies" />
            <Button text="👍" aria-label="Add user to friends" />
          </div>
        </div>
        {backupImage ? (
          <img
            src={backupImage}
            alt={username}
            className="profile-card__image"
          />
        ) : (
          <Avatar />
        )}
      </ProfileCardStyled>
    </ul>
  );
};

export default ProfileCard;
