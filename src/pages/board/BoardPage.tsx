import {useEffect, useState} from "react";
import WritePaperModal from "../../components/board/WritePaperModal";
import Header from "../layouts/Header";
import TopMenu from "../layouts/TopMenu";
import {findCommunityName} from "../../service/CommunityService";
import {useParams} from "react-router-dom";
import {getBoard, getBoards} from "../../service/BoardService";
import ReadPaperModal from "../../components/board/ReadPaperModal";

export default function BoardPage (props: any) {
  const params = useParams();
  let initialValue: string | number = params?.communityId??0;
  const [modalStatus, setModalStatus] = useState(false);
  const [readModalState, setReadModalState] = useState(false);
  const [boardData, setBoardData] = useState("" as any);
  const [boardList, setBoardList] = useState([] as any);

  useEffect(() => {
    getBoards(initialValue)
      .then(list => {
        setBoardList(list.data);
      });
  }, [initialValue]);

  const getBoardDataFromApi = async (boardId: string) => {
    let board = await getBoard(boardId);
    setBoardData(board);
    setReadModalState(true);
  }

  return (
  <>
      <Header />
      <TopMenu />
      <main className="container">
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h3 className="border-bottom pb-3 mb-0">
            {
              `#${findCommunityName(initialValue)}`
            }
          </h3>
          <table className="table table-sm table-striped">
            <thead>
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>작성자</th>
              <th>공동체</th>
              <th>조회수</th>
              <th>작성일자</th>
            </tr>
            </thead>
            <tbody>
            {
              boardList.map((board: any, index:number) => {
                return (
                  <tr key={`boardTr${index}`}>
                    <td>{board.boardId}</td>
                    <td>
                      <a href={"#"} onClick={() => getBoardDataFromApi(board.boardId)}> {board.title} </a>
                    </td>
                    <td>김도령</td>
                    <td>
                      <span className="badge text-bg-dark">
                      {board.communityCode.description}
                      </span>
                    </td>
                    <td>{board?.views??0}</td>
                    <td>{board.createdAt}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item"><a className="page-link" href="#">5</a></li>
              <li className="page-item"><a className="page-link" href="#">6</a></li>
              <li className="page-item"><a className="page-link" href="#">7</a></li>
              <li className="page-item"><a className="page-link" href="#">8</a></li>
              <li className="page-item"><a className="page-link" href="#">9</a></li>
              <li className="page-item"><a className="page-link" href="#">10</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setModalStatus(true)}

          >
            글쓰기
          </button>
        </div>

        <WritePaperModal modalStatus={modalStatus} setModalStatus={() => setModalStatus(!modalStatus)} />
        <ReadPaperModal modalStatus={readModalState} setModalStatus={() => setReadModalState(!readModalState)} data={boardData}/>
      </main>
    </>
  );
}
