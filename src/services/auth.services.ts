import { authKey } from "@/Constants/storageKeys";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};
export const getUserInfo = async () => {
  const localStorageData = getFromLocalStorage(authKey);

  if (localStorageData) {
    const decodeData = await decodedToken(localStorageData);

    return decodeData;
  } else {
    return "";
  }
};
