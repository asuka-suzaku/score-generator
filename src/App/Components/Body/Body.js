import Header from "../Header/Header";
import MainVisual from "./MainVisual";
import styled from "styled-components";
import Generate from "../Generate/Generate";
import Navigation from "../Header/Elements/Navigation";
import { useRecoilValue } from "recoil";
import { MenuAtom } from "../../Store/StylesAtom";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";

export default function Body() {
  const menu = useRecoilValue(MenuAtom);
  return (
    <>
      <main>
        <Navigation menu={menu} />
        <MainVisual id="top" />
        <BODY_STYLE $menu={menu}>
          <div className="content-width">
            <Features />
            <Generate id="generate" />
          </div>
        </BODY_STYLE>
        <Footer />
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
