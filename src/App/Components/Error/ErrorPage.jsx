import styled from "styled-components";
import * as common from "../../Style/Common/Common";

export default function ErrorPage({ error, resetErrorBoundary }) {
  const handleReset = () => {
    resetErrorBoundary();
  };

  const ErrorContent = () => {
    return (
      <>
        <ERROR_STYLE>
          <p>エラーが発生しました。</p>
          <p>{error.message}</p>
          <img src="/img/logo/logo-icon-name-subtitle.png" alt="" />
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
  margin: 3em;
  line-height: 1.5em;
  font-size: 1.5em;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin: 1em;
    width: 600px;
  }
`;

const ERROR_BUTTON = styled.p`
  background-color: ${common.HIGHT_LIGHT_COLOR};
  color: ${common.MAIN_COLOR};
  padding: 1em 6.5em;
  border-radius: 13em;
  margin: 2em 0;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    padding: 1em 3em;
  }
`;
