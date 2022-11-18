import React, { useEffect } from "react";
import { CompleteProfileStructure } from "../../redux/features/profilesSlice/types";
import { useAppSelector } from "../../redux/hooks";

const ShowProfilePage = () => {
  const { currentProfile } = useAppSelector((state) => state.profiles);

  const { username } = currentProfile as CompleteProfileStructure;

  useEffect(() => {}, []);

  return <h2>{username}</h2>;
};

export default ShowProfilePage;
