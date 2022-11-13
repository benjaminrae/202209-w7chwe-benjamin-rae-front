import { ProfileStructure } from "../../redux/features/userSlice/types";
import getAge from "../../utils/getAge";
import Button from "../Button/Button";
import ProfileCardStyled from "./ProfileCardStyled";

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
        <img src={backupImage} alt={username} className="profile-card__image" />
      </ProfileCardStyled>
    </ul>
  );
};

export default ProfileCard;
