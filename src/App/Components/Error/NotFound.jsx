import { Link } from "react-router-dom";
import styled from "styled-components";
import * as common from "../../Style/Common/Common";
import { useRecoilState } from "recoil";
import { MenuAtom } from "../../Store/StylesAtom";
import { useEffect } from "react";
import Navigation from "../Header/Elements/Navigation";

export default function NotFound() {
  const [menu, setMenu] = useRecoilState(MenuAtom);
  useEffect(() => {
    setMenu(true);
  }, []);
  return (
    <>
      <Navigation menu={menu} />
      <STYLE>
        <div className="not-found">
          <div className="not-found-error-text">
            <h4>404 NOT FOUND</h4>
            <p>お探しのページは見つかりませんでした。</p>
          </div>

          <LINK to="/">トップページへ行く</LINK>
        </div>
      </STYLE>
    </>
  );
}

const LINK = styled(Link)`
  background-color: ${common.HIGHT_LIGHT_COLOR};
  color: ${common.MAIN_COLOR};
  font-size: ${common.MAIN_FONT_SIZE}px;
  padding: 1em 5.5em;
  border-radius: 13em;
  margin: 2em 0;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    padding: 1em 3em;
    font-size: ${common.MAIN_FONT_SIZE * 0.9} px;
  }

  :hover {
    cursor: pointer;
  }
`;

const STYLE = styled.div`
  animation-name: smooth;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  @media screen and (max-width: 1200px) {
    top: 5em;
  }
  @media screen and (max-width: 500px) {
    top: 5em;
  }
  @keyframes smooth {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  display: flex;
  justify-content: center;
  position: relative;
  top: 5em;
  .not-found {
    max-width: 1200px;
    height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .not-found-error-text {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2em;
  }

  .not-found-error-text h4 {
    font-weight: ${common.BOLD_FONT_WIGHT};
    font-size: ${common.SECTION_TITLE_FONT_SIZE * 1.5}px;
  }

  .not-found-error-text p {
    font-size: ${common.MAIN_FONT_SIZE * 1.1}px;
    margin-top: 1em;
  }

  @media screen and (max-width: 500px) {
    margin: 0 2em;
    .not-found-error-text h4 {
      font-size: ${common.SECTION_TITLE_FONT_SIZE}px;
      font-weight: 700;
    }

    .not-found-error-text p {
      font-size: ${common.MAIN_FONT_SIZE}px;
    }
  }
`;
