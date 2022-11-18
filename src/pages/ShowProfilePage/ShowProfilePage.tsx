import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProfiles from "../../hooks/useProfiles/useProfiles";
import { CompleteProfileStructure } from "../../redux/features/profilesSlice/types";
import { useAppSelector } from "../../redux/hooks";
import { ReactComponent as Avatar } from "../../resources/svgs/avatar.svg";
import ShowProfilePageStyled from "./ShowProfilePageStyled";

const ShowProfilePage = () => {
  const { getProfileAndFriendsById } = useProfiles();

  const { profileId } = useParams();

  useEffect(() => {
    getProfileAndFriendsById(profileId!);
  }, [getProfileAndFriendsById, profileId]);

  const { currentProfile } = useAppSelector((state) => state.profiles);

  const { username, birthday, location, backupImage, friends, enemies, bio } =
    currentProfile as CompleteProfileStructure;

  return (
    <ShowProfilePageStyled>
      {backupImage ? (
        <img
          src={backupImage}
          alt={username}
          className="profile-page__avatar"
        />
      ) : (
        <Avatar className="profile-page__avatar" />
      )}
      <h2 className="profile-page__title">{username}</h2>
      <p>Bio: {bio}</p>
      <span>Birthday: {birthday}</span>
      <span>Location: {location}</span>
      <h3>Friends</h3>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.username}</li>
        ))}
      </ul>
      <h3>Enemies</h3>
      <ul>
        {enemies.map((enemy) => (
          <li key={enemy.id}>{enemy.username}</li>
        ))}
      </ul>
    </ShowProfilePageStyled>
  );
};

export default ShowProfilePage;
