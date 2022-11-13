import { ProfileStructure } from "../../redux/features/userSlice/types";
import ProfileCardStyled from "./ProfileCardStyled";

interface ProfileCardProps {
  profile: ProfileStructure;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return <ProfileCardStyled>ProfileCard</ProfileCardStyled>;
};

export default ProfileCard;
