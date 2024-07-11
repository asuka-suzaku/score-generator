import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { MenuAtom } from "../../Store/StylesAtom";
import Navigation from "../Header/Elements/Navigation";
import HowToUseSheet from "./Elements/HowToUseSheet";
import Footer from "../Footer/Footer";
import HowToUseSetting from "./Elements/HowToUseSetting";
import CanUsePlace from "./Elements/CanUsePlace";
import ExampleImageLook from "./Elements/ExampleImageLook";
import Attention from "./Elements/Attention";

export default function HowTo() {
  const [menu, setMenu] = useRecoilState(MenuAtom);

  useEffect(() => {
    setMenu(true);
  }, []);
  return (
    <>
      <Navigation menu={menu} />
      <HOW_TO_STYLE id="howToTop">
        <div className="content-width">
          <HowToUseSheet />
          <ExampleImageLook />
          <HowToUseSetting />
          <CanUsePlace />
          <Attention />
        </div>
      </HOW_TO_STYLE>
      <Footer />
    </>
  );
}

const HOW_TO_STYLE = styled.main`
  display: flex;
  justify-content: center;
  animation-name: smooth;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  .content-width {
    position: relative;
    max-width: calc(1200px - 5em);
    margin: 0 5em;
    margin-top: 6em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .attention {
    margin-top: 3em;
  }

  @media screen and (max-width: 500px) {
    .content-width {
      margin: 0 3em;
      margin-top: 6em;
      max-width: calc(100vw - 5em);
    }
  }

  @keyframes smooth {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
