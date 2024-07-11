import MainVisual from "./MainVisual";
import styled from "styled-components";
import Generate from "../Generate/Generate";
import Navigation from "../Header/Elements/Navigation";
import { useRecoilState } from "recoil";
import { MenuAtom } from "../../Store/StylesAtom";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../Error/ErrorPage";
export default function Body() {
  const [menu, setMenu] = useRecoilState(MenuAtom);
  useEffect(() => {
    setMenu(true);
  }, []);

  return (
    <>
      <MAIN_STYLE $menu={menu} id="mainTop">
        <Navigation menu={menu} />
        <MainVisual id="top" />
        <BODY_STYLE $menu={menu}>
          <div className="content-width">
            <Features />
            <ErrorBoundary FallbackComponent={ErrorPage}>
              <Generate id="generate" />
            </ErrorBoundary>
          </div>
        </BODY_STYLE>
        <Footer />
      </MAIN_STYLE>
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

const MAIN_STYLE = styled.main`
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
`;
