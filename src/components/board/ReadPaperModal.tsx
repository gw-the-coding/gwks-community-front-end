import {useRef, useState} from "react";
import {Editor} from "@toast-ui/react-editor";
import {communityList} from "../../service/CommunityService";
import {categoryList} from "../../service/CategoryService";
import Board, {OperationStatus} from "../../interface/Board";
import {writeBoard} from "../../service/BoardService";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export default function ReadPaperModal ({modalStatus, setModalStatus}: any, data: Board) {

  const editorRef = useRef<Editor>(null);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const initialValue = urlSearchParams.get("community")??-1;
  const [title, setTitle] = useState<string>("");
  const [communitySysId, setCommunitySysId] = useState(initialValue);
  const [categorySysId, setCategorySysId] = useState(0);

  const communitys = communityList();
  const categorys = categoryList();

  console.log(data.boardId);

  const canClose = () => {
    const sendBoard:Board= {
      title,
      description: editorRef.current?.getInstance().getHTML() as string,
      communitySysId,
      categorySysId,
      status: OperationStatus.ACTIVE,
      isNotice: 'NO'
    };
    writeBoard(sendBoard);
    setModalStatus();
  }

  return (
    <>
      <Modal isOpen={modalStatus} toggle={setModalStatus} fullscreen>
        <ModalHeader toggle={setModalStatus}>Modal title</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md mb-1">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  defaultValue={initialValue}
                  onChange={e => setCommunitySysId(e.target.value)}
                >
                  <option value={-1}>공동체를 선택해주세요</option>
                  {
                    communitys
                      .map(dto => {
                        return (<option key={`community${dto.id}`} value={dto.id}>{dto.text}</option>);
                      })
                  }
                </select>
                <label htmlFor="floatingSelectGrid">공동체</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelectGrid1"
                  defaultValue={-1}
                  onChange={e => setCategorySysId(e.target.value as any)}
                >
                  <option value={-1}>카테고리를 선택해주세요</option>
                  {
                    categorys
                      .map(dto => {
                        return (<option key={`category${dto.id}`} value={dto.id}>{dto.text}</option>);
                      })
                  }
                </select>
                <label htmlFor="floatingSelectGrid1">카테고리</label>
              </div>
            </div>
          </div>
          <div className="row mt-1 mb-3">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="제목을 입력하여주세요"
                  onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor="floatingPassword">제목</label>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-md">
              <Editor
                previewStyle="vertical"
                height="300px"
                initialEditType="wysiwyg"
                toolbarItems={[
                  ['heading', 'bold', 'italic', 'strike'],
                  ['hr', 'quote'],
                  ['ul', 'ol', 'task', 'indent', 'outdent'],
                  ['table', 'image', 'link'],
                  ['code', 'codeblock']
                ]}
                useCommandShortcut={false}
                ref={editorRef}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={setModalStatus}>
            작성완료
          </Button>{' '}
          <Button color="secondary" onClick={canClose}>
            취소하기
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
