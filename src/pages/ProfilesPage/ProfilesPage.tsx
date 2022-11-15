import { useEffect } from "react";
import ProfileList from "../../components/ProfileList/ProfileList";
import useProfiles from "../../hooks/useProfiles/useProfiles";
import { useAppSelector } from "../../redux/hooks";
import ProfilesPageStyled from "./ProfilesPageStyled";

const ProfilesPage = () => {
  const { id } = useAppSelector((state) => state.user);
  const { loadAllProfiles, getProfileById } = useProfiles();

  useEffect(() => {
    loadAllProfiles();
    getProfileById(id);
  }, [getProfileById, id, loadAllProfiles]);

  return (
    <ProfilesPageStyled>
      <ProfileList />
    </ProfilesPageStyled>
  );
};

export default ProfilesPage;
