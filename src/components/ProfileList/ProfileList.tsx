import { getRandomProfileList } from "../../factories/profileFactory";
import { useAppSelector } from "../../redux/hooks";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileListStyled from "./ProifleListStyled";

const ProfileList = () => {
  const { profiles } = useAppSelector((state) => state.profiles);

  return (
    <ProfileListStyled>
      <span>{`${profiles.length} profiles found`}</span>
      <ul className="profile-list__list">
        {profiles.map((profile) => (
          <ProfileCard profile={profile} key={profile.id} />
        ))}
      </ul>
    </ProfileListStyled>
  );
};

export default ProfileList;
