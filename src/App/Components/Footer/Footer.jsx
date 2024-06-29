import styled from "styled-components";
import InPageLink from "./Elements/InPageLink";
import * as common from "../../Style/Common/Common";

export default function Footer() {
  return (
    <>
      <FOOTER_STYLE>
        <InPageLink />
        <div className="footer-title">
          <p>SCORE GENERATOR</p>
          <p className="copy-right">
            Copyright &copy; 2024 ASUKA SUZAKU All Rights Reserved
          </p>
        </div>
      </FOOTER_STYLE>
    </>
  );
}

const FOOTER_STYLE = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
  padding: 5em 0;
  background-color: ${common.SUB_COLOR};

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
    margin-top: 1em;
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
`;
