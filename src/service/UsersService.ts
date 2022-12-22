import axios from "axios";
import {StorageUtil} from "../config/StorageUtil";

export const joinUser = async (users: any) => {
  const formData = new FormData();
  for(const key in users) {
    formData.append(key, users[key]);
  }
  return await axios.put(`http://localhost:8080/api/v1/accounts/${users.userSysId}`, formData);
}

export const getUserDataFromStorage = () => {
  let item = StorageUtil.local.getItem("userData");
  if (item === "") {
    return "";
  }
  return JSON.parse(item);
}
