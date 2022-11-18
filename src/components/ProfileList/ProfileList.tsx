import { ProfileStructure } from "../../redux/features/profilesSlice/types";
import { useAppSelector } from "../../redux/hooks";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileListStyled from "./ProifleListStyled";

const ProfileList = () => {
  const { currentProfile, profiles } = useAppSelector(
    (state) => state.profiles
  );

  const { enemies, friends } = currentProfile as ProfileStructure;

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
