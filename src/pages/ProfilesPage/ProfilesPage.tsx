import { useEffect } from "react";
import ProfileList from "../../components/ProfileList/ProfileList";
import useProfiles from "../../hooks/useProfiles/useProfiles";
import ProfilesPageStyled from "./ProfilesPageStyled";

const ProfilesPage = () => {
  const { loadAllProfiles } = useProfiles();

  useEffect(() => {
    loadAllProfiles();
  }, [loadAllProfiles]);

  return (
    <ProfilesPageStyled>
      <ProfileList />
    </ProfilesPageStyled>
  );
};

export default ProfilesPage;
