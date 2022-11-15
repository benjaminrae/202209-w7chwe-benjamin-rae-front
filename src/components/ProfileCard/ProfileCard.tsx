import { ProfileStructure } from "../../redux/features/profilesSlice/types";
import getAge from "../../utils/getAge";
import Button from "../Button/Button";
import ProfileCardStyled from "./ProfileCardStyled";
import { ReactComponent as Avatar } from "../../resources/svgs/avatar.svg";
import useProfiles from "../../hooks/useProfiles/useProfiles";
import { Relationships } from "../../hooks/useProfiles/types";

interface ProfileCardProps {
  profile: ProfileStructure;
  relationship: Relationships;
}

const ProfileCard = ({
  profile: { location, username, backupImage, birthday, id },
  relationship,
}: ProfileCardProps) => {
  const { updateRelationship } = useProfiles();

  return (
    <ul>
      <ProfileCardStyled>
        <div className="profile-card__info">
          <h3>
            {username}, {getAge(birthday!) ?? "?"}
          </h3>
          <div>{location}</div>
          <div className="profile-card__buttons">
            <Button
              text="👎"
              aria-label="Add user to enemies"
              inverted={relationship !== "enemies"}
              action={() =>
                updateRelationship({
                  relationship:
                    relationship === "enemies" ? "removed" : "enemies",
                  targetUser: username,
                  targetUserId: id,
                })
              }
            />
            <Button
              text="👍"
              aria-label="Add user to friends"
              inverted={relationship !== "friends"}
              action={() =>
                (async () =>
                  updateRelationship({
                    relationship:
                      relationship === "friends" ? "removed" : "friends",
                    targetUser: username,
                    targetUserId: id,
                  }))()
              }
            />
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
