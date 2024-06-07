import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <NAVIGATION_STYLE>
        <nav>
          <ul>
            <li className="nav-button">
              <ANCHOR_LINK_STYLE>
                <img src="/img/icon_ex.png" alt="" />
                <p>使い方</p>
              </ANCHOR_LINK_STYLE>
            </li>
            <li className="nav-button">
              <ANCHOR_LINK_STYLE>
                <img src="/img/icon_ex.png" alt="" />
                <p>ジェネレート</p>
              </ANCHOR_LINK_STYLE>
            </li>
            <li className="nav-button">
              <ANCHOR_LINK_STYLE>
                <img src="/img/icon_ex.png" alt="" />
                <p>ログイン</p>
              </ANCHOR_LINK_STYLE>
            </li>
          </ul>
        </nav>
      </NAVIGATION_STYLE>
    </>
  );
}

const NAVIGATION_STYLE = styled.div`
  ul {
    display: flex;
  }

  .nav-button {
    margin: 0 2.8em;
    text-align: center;
  }
`;

const ANCHOR_LINK_STYLE = styled(AnchorLink)`
  display: flex;
  text-align: center;
  align-items: center;

  img {
    width: 2.2em;
    height: 2.2em;
  }
  p {
    margin-left: 0.6em;
  }
`;
