import styled from "@emotion/styled";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor as OurEditor } from "@toast-ui/react-editor";
import { gql, useMutation } from "@apollo/client";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Modal } from "antd";
import { breakPoints } from "../../../../commons/styles/Media";

const EditorBox = styled.div`
  .ProseMirror {
    font-size: 20px;
  }

  .toastui-editor-contents {
    font-size: 20px;
  }
`;

const Editor = styled(OurEditor)``;

export const Wrapper = styled.div`
  width: 100%;

  @media ${breakPoints.tablet} {
    width: 500px;
  }

  @media ${breakPoints.mobile} {
  }
`;

const UPLOAD_IMAGE = gql`
  mutation uploadImage($file: Upload!) {
    uploadImage(file: $file)
  }
`;

export default function EditorUInonEdit(props: any) {
  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  console.log(props.defaultData)
  
  return (
    <Wrapper>
        <EditorBox>
          <Editor
            previewStyle="vertical"
            ref={props.editorRef}
            placeholder="세부사항, 특이사항등을 상세히 설명해주시고, 사진을 끌어다 놓아보세요!"
            plugins={[colorSyntax]}
            hooks={{
              addImageBlobHook: async (file: Blob | File, callback) => {
                try {
                  const result = await uploadImage({
                    variables: { file },
                  });
                  const result1 = result?.data.uploadImage.replaceAll(
                    " ",
                    "%20"
                  );
                  const url = `https://storage.googleapis.com/${String(
                    result1
                  )}`;
                  callback(url);
                } catch (error) {
                  if (error instanceof Error)
                    Modal.error({ content: error.message });
                }
              },
            }}
          />
        </EditorBox>
    </Wrapper>
  );
}
