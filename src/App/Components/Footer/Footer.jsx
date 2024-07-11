import styled from "styled-components";
import InPageLink from "./Elements/InPageLink";
import * as common from "../../Style/Common/Common";
import { useRecoilValue } from "recoil";
import { ToggleAtom } from "../../Store/StylesAtom";

export default function Footer() {
  const toggle = useRecoilValue(ToggleAtom);
  return (
    <>
      <FOOTER_STYLE $toggle={toggle}>
        <InPageLink />
        <div className="footer-title">
          <img src="/img/logo/logo-icon-name-subtitle.png" alt="" />
          <p className="copy-right">
            Copyright &copy; 2024 ASUKA SUZAKU All Rights Reserved
          </p>
        </div>
      </FOOTER_STYLE>
    </>
  );
}

const FOOTER_STYLE = styled.footer`
  display: ${(props) => (props.$toggle === "block" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10em;
  padding: 5em 0;
  padding-bottom: 2em;
  background-color: ${common.SUB_COLOR};

  img {
    height: 100px;
    min-width: 200px;
  }

  .footer-links {
    margin: 0 3em;
  }
  .footer-title {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .copy-right {
    margin-top: 2em;
  }

  @media screen and (max-width: 800px) {
    .footer-links {
      margin: 3em 0;
    }

    .footer-links:not(:last-child) {
      border-bottom: 1px solid ${common.FONT_COLOR};
      padding-bottom: 1em;
    }

    .copy-right {
      margin: 1em 1em;
      text-align: center;
    }
  }

  @media screen and (max-width: 500px) {
    img {
      width: 50%;
      height: auto;
    }

    .copy-right {
      margin-top: 3em;
      font-size: ${common.MAIN_FONT_SIZE * 0.8} px;
    }
  }
`;
