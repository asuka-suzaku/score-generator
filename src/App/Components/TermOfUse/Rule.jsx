import { useRecoilState } from "recoil";
import styled from "styled-components";
import { MenuAtom } from "../../Store/StylesAtom";
import Footer from "../Footer/Footer";
import TermOfUse from "./TermOfUse";
import { useEffect } from "react";
import Navigation from "../Header/Elements/Navigation";

export default function Rule() {
  const [menu, setMenu] = useRecoilState(MenuAtom);

  useEffect(() => {
    setMenu(true);
  }, []);
  return (
    <>
      <Navigation menu={menu} />
      <STYLE>
        <div className="content-width">
          <TermOfUse />
        </div>
      </STYLE>
      <Footer />
    </>
  );
}

const STYLE = styled.main`
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
    margin-top: 9em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    .content-width {
      margin: 0 3em;
      margin-top: 9em;
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
