import axios, { AxiosError } from "axios";
import { loadProfilesActionCreator } from "../../redux/features/profilesSlice/profilesSlice";
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
}

const profilesRoutes = {
  profilesRoute: "/profiles",
};

const apiUrl = process.env.REACT_APP_API_URL;

const useProfiles = (): UseProfilesStructure => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const loadAllProfiles = async () => {
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
  };
  return { loadAllProfiles };
};

export default useProfiles;
