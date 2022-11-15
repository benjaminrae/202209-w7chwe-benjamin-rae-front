import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { EditProfileData } from "../../components/EditProfileForm/EditProfileForm";
import {
  loadCurrentProfileActionCreator,
  loadProfilesActionCreator,
} from "../../redux/features/profilesSlice/profilesSlice";
import { ProfileStructure } from "../../redux/features/profilesSlice/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AxiosErrorResponseBody } from "../useUser/types";
import {
  GetProfileByIdResponse,
  LoadProfilesResponse,
  UpdateRelationshipBody,
} from "./types";

interface UseProfilesStructure {
  loadAllProfiles: () => Promise<void>;
  editProfile: (editProfileFormData: EditProfileData) => Promise<void>;
  getProfileById: (profileId: string) => Promise<void>;
  updateRelationship: (
    relationshipData: Omit<UpdateRelationshipBody, "currentUser">
  ) => Promise<void>;
}

const profilesRoutes = {
  profilesRoute: "/profiles",
  editRoute: "/edit",
  profileRoute: "/profile",
  relationshipRoute: "/relationship",
};

const apiUrl = process.env.REACT_APP_API_URL;

const useProfiles = (): UseProfilesStructure => {
  const { token, username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const loadAllProfiles = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const response = await axios.get<LoadProfilesResponse>(
        `${apiUrl}${profilesRoutes.profilesRoute}`,
        authHeaders
      );

      const { profiles } = response.data;

      dispatch(loadProfilesActionCreator(profiles));
      dispatch(hideLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      if (error instanceof AxiosError) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: (error as AxiosError<AxiosErrorResponseBody>).response
              ?.data.error!,
          })
        );
      }
    }
  }, [dispatch, token, authHeaders]);

  const editProfile = async (editProfileFormData: EditProfileData) => {
    dispatch(showLoadingActionCreator());

    try {
      await axios.put<ProfileStructure>(
        `${apiUrl}${profilesRoutes.profilesRoute}${profilesRoutes.editRoute}`,
        editProfileFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: false,
          modalText: "Profile updated successfully",
        })
      );
      navigate("/profiles");
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      if (error instanceof AxiosError) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: (error as AxiosError<AxiosErrorResponseBody>).response
              ?.data.error!,
          })
        );
      }
    }
  };

  const getProfileById = useCallback(
    async (profileId: string) => {
      dispatch(showLoadingActionCreator());

      try {
        const response = await axios.get<GetProfileByIdResponse>(
          `${apiUrl}${profilesRoutes.profilesRoute}${profilesRoutes.profileRoute}/${profileId}`,
          authHeaders
        );

        dispatch(loadCurrentProfileActionCreator(response.data.profile));
        dispatch(hideLoadingActionCreator());
      } catch (error: unknown) {
        dispatch(hideLoadingActionCreator());

        if (error instanceof AxiosError) {
          dispatch(
            showModalActionCreator({
              isError: true,
              modalText: (error as AxiosError<AxiosErrorResponseBody>).response
                ?.data.error!,
            })
          );
        }
      }
    },
    [dispatch, token, authHeaders]
  );

  const updateRelationship = async (
    relationshipData: Omit<UpdateRelationshipBody, "currentUser">
  ) => {
    const completeRelationshipData: UpdateRelationshipBody = {
      ...relationshipData,
      currentUser: username,
    };

    try {
      const response = await axios.put<{ profile: ProfileStructure }>(
        `${apiUrl}${profilesRoutes.profilesRoute}${profilesRoutes.relationshipRoute}`,
        completeRelationshipData,
        authHeaders
      );

      dispatch(loadCurrentProfileActionCreator(response.data.profile));
    } catch (error) {
      dispatch(
        showModalActionCreator({
          isError: true,
          modalText: (error as Error).message,
        })
      );
    }
  };

  return { loadAllProfiles, editProfile, getProfileById, updateRelationship };
};

export default useProfiles;
