import React, { useMemo, useRef, useState } from "react";
import { Relationships } from "../../hooks/useProfiles/types";
import { useAppSelector } from "../../redux/hooks";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileListStyled from "./ProifleListStyled";

const ProfileList = () => {
  const {
    currentProfile: { enemies, friends },
    profiles,
  } = useAppSelector((state) => state.profiles);

  const [filter, setFilter] = useState<Relationships>("removed");

  const profilesToShow = useMemo(() => {
    if (filter === "friends") {
      return profiles.filter((profile) =>
        friends?.find((friend) => friend === profile.id)
      );
    }

    if (filter === "enemies") {
      return profiles.filter((profile) =>
        enemies?.find((enemy) => enemy === profile.id)
      );
    }

    return profiles;
  }, [enemies, filter, friends, profiles]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as Relationships);
  };

  return (
    <ProfileListStyled>
      <select onChange={handleFilterChange}>
        <option value={"removed"}>Show all</option>
        <option value={"friends"}>Friends</option>
        <option value={"enemies"}>Enemies</option>
      </select>
      <span>{`${profiles.length} profiles found`}</span>
      <ul className="profile-list__list">
        {profilesToShow.map((profile) => (
          <ProfileCard
            profile={profile!}
            key={profile!.id}
            relationship={
              friends?.includes(profile!.id)
                ? "friends"
                : enemies?.includes(profile!.id)
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
