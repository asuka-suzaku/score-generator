import styled from "styled-components";
import Preview from "./Elements/Preview";
import Setting from "./Elements/Setting";
import { MenuAtom, StylesAtom, ToggleAtom } from "../../Store/StylesAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import * as common from "../../Style/Common/Common";
import { CreateImage } from "./Function/Create/CreateImage";
import Navigation from "../Header/Elements/Navigation";
import Footer from "../Footer/Footer";

export default function Generator() {
  const [styles, setStyles] = useRecoilState(StylesAtom);
  const width = styles.fileConfig.contentWidth;
  const hight = styles.fileConfig.contentHight;
  const [toggle, setToggle] = useRecoilState(ToggleAtom);
  const menu = useRecoilValue(MenuAtom);

  const handleToggle = () => {
    if (toggle == "block") {
      setToggle("none");
    } else {
      setToggle("block");
    }
  };

  // const handle = () => {
  //   Test();
  // };
  return (
    <>
      <Navigation menu={menu} />
      <GENERATOR_STYLE $toggle={toggle}>
        <div className="preview">
          <Preview />
        </div>
        <div className="setting pre">
          <Setting />
        </div>

        {toggle === "block" ? (
          <div id="fullPreviewIn" className="view" onClick={handleToggle}>
            フルサイズ
          </div>
        ) : (
          <div id="fullPreviewOut" className="view" onClick={handleToggle}>
            設定画面へ戻る
          </div>
        )}
        <div className="export pre">
          <EXPORT type="button" onClick={() => CreateImage(width, hight)}>
            出力
          </EXPORT>
        </div>
      </GENERATOR_STYLE>
      <Footer />
    </>
  );
}

const EXPORT = styled.p`
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

const GENERATOR_STYLE = styled.main`
  z-index: 2;
  .pre {
    display: ${(props) => props.$toggle};
  }

  .view {
    padding: 1em 6.5em;
    border-radius: 13em;
    margin: 2em 0;
    background-color: ${common.HIGHT_LIGHT_COLOR};
    color: ${common.MAIN_COLOR};
    @media screen and (max-width: 500px) {
      padding: 1em 3em;
    }
  }

  margin-top: ${(props) => (props.$toggle === "block" ? "10em" : "0")};
  display: flex;
  flex-direction: column;
  align-items: center;

  .setting {
    max-width: 1200px;
  }

  .preview {
    display: grid;
    place-content: center;
    overflow: scroll;
    width: ${(props) => (props.$toggle === "block" ? "100vw" : "100vw")};
    height: ${(props) => (props.$toggle === "block" ? "800px" : "100vh")};
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    .view {
      padding: 1em 3em;
    }
  }
`;
