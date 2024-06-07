import HowTo from "../HowTo/HowTo";
import Header from "../Header/Header";
import MainVisual from "./MainVisual";
import styled from "styled-components";
import Generate from "../Generate/Generate";

export default function Body() {
  return (
    <>
      <main>
        <Header />
        <MainVisual />
        <BODY_STYLE>
          <div className="content-width">
            <HowTo />
            <Generate />
          </div>
        </BODY_STYLE>
      </main>
    </>
  );
}

export const BODY_STYLE = styled.div`
  display: flex;
  justify-content: center;

  .content-width {
    width: 1200px;
  }
`;
