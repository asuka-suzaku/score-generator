import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Logo() {
  const pathName = useLocation().pathname;
  return (
    <>
      {pathName === "/" ? (
        <div>
          <AN_LOGO_STYLE
            className="logo-img-1 logo-style"
            href="#mainTop"
            offset="200"
          >
            <img
              className="logo"
              height="100"
              src="/img/logo/logo-icon-name.png"
              alt=""
            />
          </AN_LOGO_STYLE>
          <AN_LOGO_STYLE
            className="logo-img-2 logo-style"
            href="#mainTop"
            offset="200"
          >
            <img
              className="logo-mini"
              height="100"
              src="/img/logo/logo-name-mini.png"
              alt=""
            />
          </AN_LOGO_STYLE>
        </div>
      ) : (
        <div>
          <LOGO_STYLE className="logo-img-2 logo-style">
            <img
              className="logo-mini"
              height="100"
              src="/img/logo/logo-name-mini.png"
              alt=""
            />
          </LOGO_STYLE>
          <LOGO_STYLE className="logo-img-1 logo-style">
            <img
              className="logo"
              height="100"
              src="/img/logo/logo-icon-name.png"
              alt=""
            />
          </LOGO_STYLE>
        </div>
      )}
    </>
  );
}

const AN_LOGO_STYLE = styled(AnchorLink)`
  margin-left: 3em;
  display: flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: 0;

  @media screen and (max-width: 500px) {
    margin-left: 1em;

    .logo-mini {
      height: 1em;
      width: auto;
      position: relative;
      top: 2px;
    }

    padding-left: 1em;
  }

  .logo {
    width: auto;
    height: 3em;
  }

  @media screen and (max-width: 500px) {
    margin-left: 1em;

    .logo-mini {
      height: 1em;
      width: auto;
      position: relative;
      top: 2px;
    }

    padding-left: 1em;
  }
`;

const LOGO_STYLE = styled(Link)`
  margin-left: 3em;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    margin-left: 1em;

    .logo-mini {
      height: 1em;
      width: auto;
      position: relative;
      top: 2px;
    }

    padding-left: 1em;
  }

  .logo {
    width: auto;
    height: 3em;
  }

  margin-left: 3em;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    margin-left: 1em;

    .logo-mini {
      height: 1em;
      width: auto;
      position: relative;
      top: 2px;
    }

    padding-left: 1em;
  }
`;
