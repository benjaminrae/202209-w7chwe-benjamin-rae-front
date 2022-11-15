import { ProfileStructure } from "../../redux/features/profilesSlice/types";
import { useAppSelector } from "../../redux/hooks";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileListStyled from "./ProifleListStyled";

const ProfileList = () => {
  const {
    currentProfile: { enemies, friends },
    profiles,
  } = useAppSelector((state) => state.profiles);

  return (
    <ProfileListStyled>
      <span>{`${profiles.length} profiles found`}</span>
      <ul className="profile-list__list">
        {profiles.map((profile) => (
          <ProfileCard
            profile={profile}
            key={profile.id}
            relationship={
              friends?.includes(profile.id)
                ? "friends"
                : enemies?.includes(profile.id)
                ? "enemies"
                : "removed"
            }
          />
        ))}
      </ul>
    </ProfileListStyled>
  );
};

export default ProfileList;
