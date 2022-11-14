import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { EditProfileData } from "../../components/EditProfileForm/EditProfileForm";
import { loadProfilesActionCreator } from "../../redux/features/profilesSlice/profilesSlice";
import { ProfileStructure } from "../../redux/features/profilesSlice/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AxiosErrorResponseBody } from "../useUser/types";
import { LoadProfilesResponse } from "./types";

interface UseProfilesStructure {
  loadAllProfiles: () => Promise<void>;
  editProfile: (editProfileFormData: EditProfileData) => Promise<void>;
  getProfileById: (profileId: string) => Promise<void>;
}

const profilesRoutes = {
  profilesRoute: "/profiles",
  editRoute: "/edit",
  profileRoute: "/profile",
};

const apiUrl = process.env.REACT_APP_API_URL;

const useProfiles = (): UseProfilesStructure => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loadAllProfiles = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const response = await axios.get<LoadProfilesResponse>(
        `${apiUrl}${profilesRoutes.profilesRoute}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
  }, [dispatch, token]);

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

  const getProfileById = async (profileId: string) => {
    dispatch(showLoadingActionCreator());
    try {
      const response = await axios.get<ProfileStructure>(
        `${apiUrl}${profilesRoutes.profilesRoute}${profilesRoutes.profileRoute}/${profileId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
  };

  return { loadAllProfiles, editProfile, getProfileById };
};

export default useProfiles;
