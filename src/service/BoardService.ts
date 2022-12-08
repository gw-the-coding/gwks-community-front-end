import Board from "../interface/Board";
import axios from "axios";

export const writeBoard= (request: Board) => {

  const formData = new FormData();
  for(const key in request) {
    formData.append(key, request[key]);
  }
  axios.post("http://localhost:8080/api/v1/board", formData);
}

export const getBoard = async (boardId: string) => {
  const result = await axios.get(`http://localhost:8080/api/v1/boards/${boardId}`);
  return result.data;
}

export const getBoards = async (communitySysId: string | number) => {
  return await axios.get(`http://localhost:8080/api/v1/boards/list`, {
    params: {
      communitySysId: communitySysId
    }
  });
}
