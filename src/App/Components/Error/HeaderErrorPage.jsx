import styled from "styled-components";
import * as common from "../../Style/Common/Common";

export default function HeaderErrorPage({ error, resetErrorBoundary }) {
  const handleReset = () => {
    resetErrorBoundary();
  };

  const ErrorContent = () => {
    return (
      <>
        <ERROR_STYLE className="errorPageMessage">
          <div className="errorPageMessageContent">
            <p>エラーが発生しました。</p>
            <p>{error.message}</p>
          </div>

          <ERROR_BUTTON className="resetButton" onClick={handleReset}>
            リトライ
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
  margin: 0 2em;
  line-height: 1.5em;
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 1em;
    width: 600px;
  }

  .errorPageMessageContent {
    margin-left: 1em;
  }

  @media screen and (max-width: 1200px) {
    padding: 1em 3em;
    flex-direction: column;
  }
`;

const ERROR_BUTTON = styled.p`
  background-color: ${common.HIGHT_LIGHT_COLOR};
  color: ${common.MAIN_COLOR};
  padding: 1em 6.5em;
  border-radius: 13em;
  text-decoration: none;

  @media screen and (max-width: 1200px) {
    padding: 0.5em 5em;
  }

  @media screen and (max-width: 500px) {
    padding: 1em 3em;
  }
`;
