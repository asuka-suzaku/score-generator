import styled from "styled-components";

export default function InPageLink() {
  return (
    <>
      <InPageLink_Style>
        <InPageLink_CONTENT_Style className="footer-links">
          <p>サイトマップ</p>
          <ul>
            <li>TOP</li>
            <li>特徴</li>
            <li>使い方</li>
            <li>ジェネレート</li>
          </ul>
        </InPageLink_CONTENT_Style>
        <InPageLink_CONTENT_Style className="footer-links">
          <p>利用規約</p>
          <ul>
            <li>利用規約ページ</li>
          </ul>
        </InPageLink_CONTENT_Style>
        <InPageLink_CONTENT_Style className="footer-links">
          <p>連絡先</p>
          <ul>
            <li>X:@suzaku_asuka</li>
          </ul>
        </InPageLink_CONTENT_Style>
      </InPageLink_Style>
    </>
  );
}

const InPageLink_Style = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

const InPageLink_CONTENT_Style = styled.div`
  p {
    position: relative;
    left: -1em;
    margin-bottom: 2em;
  }
  ul {
    list-style: none;
  }

  li {
    margin: 1em 0;
  }

  @media screen and (max-width: 800px) {
    p {
      margin-bottom: 1em;
    }
  }
`;
