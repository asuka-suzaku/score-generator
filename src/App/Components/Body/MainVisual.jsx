import styled from "styled-components";

export default function MainVisual() {
  return (
    <>
      <MAIN_VISUAL_STYLE>
        <img src="/img/mainviuale_ex.png" alt="" />
      </MAIN_VISUAL_STYLE>
    </>
  );
}

const MAIN_VISUAL_STYLE = styled.section`
  img {
    width: 100vw;
  }
`;
