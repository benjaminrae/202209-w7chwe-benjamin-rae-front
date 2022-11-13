import { getRandomProfileList } from "../../factories/profileFactory";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileListStyled from "./ProifleListStyled";

const ProfileList = () => {
  const profileList = getRandomProfileList(20);
  return (
    <ProfileListStyled>
      <span>{`${profileList.length} profiles found`}</span>
      <ul className="profile-list__list">
        {profileList.map((profile) => (
          <ProfileCard profile={profile} key={profile.id} />
        ))}
      </ul>
    </ProfileListStyled>
  );
};

export default ProfileList;
