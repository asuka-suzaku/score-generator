import styled from "styled-components";

export default function Logo() {
  return (
    <>
      <LOGO_STYLE>
        <img src="/img/logo_ex.png" alt="" />
        <h1>SCORE GENERATOR</h1>
      </LOGO_STYLE>
    </>
  );
}

const LOGO_STYLE = styled.div`
  padding-left: 3em;
  display: flex;
  align-items: center;

  img {
    width: 3em;
    height: 3em;
  }

  h1 {
    margin-left: 0.5em;
    font-size: 24px;
    letter-spacing: 0;
  }

  @media screen and (max-width: 500px) {
    img {
      display: none;
    }

    padding-left: 1em;
  }
`;
