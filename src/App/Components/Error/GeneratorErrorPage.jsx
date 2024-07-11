import styled from "styled-components";
import * as common from "../../Style/Common/Common";

export default function ErrorPage({ error }) {
  const handleReset = () => {
    window.location.href = "/generator";
  };

  const ErrorContent = () => {
    return (
      <>
        <ERROR_STYLE>
          <p className="error-preview">エラーが発生しました。</p>
          <p>{error.message}</p>
          <ERROR_BUTTON className="resetButton" onClick={handleReset}>
            リセット
          </ERROR_BUTTON>
        </ERROR_STYLE>
      </>
    );
  };

  return (
    <>
      <ErrorContent />
    </>
  );
}

const ERROR_STYLE = styled.div`
  margin: 3em;
  line-height: 1.5em;
  font-size: 1.5em;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .error-preview {
    font-weight: ${common.BOLD_FONT_WIGHT};
    font-size: ${common.SECTION_TITLE_FONT_SIZE * 1.2}px;
  }

  p {
    font-size: ${common.MAIN_FONT_SIZE}px;
  }

  img {
    margin: 1em;
    width: 600px;
  }
  @media screen and (max-width: 500px) {
    .error-preview {
      font-weight: 700;
    }
  }
`;

const ERROR_BUTTON = styled.p`
  background-color: ${common.HIGHT_LIGHT_COLOR};
  color: ${common.MAIN_COLOR};
  padding: 0.5em 4.5em;
  border-radius: 13em;
  margin: 2em 0;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    padding: 1em 3em;
  }
`;
