import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { WindowAtom } from "../../Store/StylesAtom";
import * as common from "../../Style/Common/Common";
export default function LogIn() {
  const Window = useRecoilValue(WindowAtom);
  return (
    <>
      <MAIN_VISUAL_STYLE>
        <div className="top-content-width">
          <Splide
            options={{
              width: 500,
              width: `${Window < 1200 ? "100%" : "60%"}`,
              start: 2,
              perPage: 1,
              gap: "1em",
              easing: "ease",
              arrows: true,
              autoplay: true,
              interval: 6000,
              rewind: true,
              speed: 500,
              rewindSpeed: 500,
              padding: { left: "3vw", right: "3vw" },
            }}
          >
            <SplideSlide>
              <img src="/img/sg-pop-main.png" />
            </SplideSlide>
            <SplideSlide>
              <img src="/img/sg-elegnt-main.png" />
            </SplideSlide>
            <SplideSlide>
              <img src="/img/sg-space-main.png" />
            </SplideSlide>
          </Splide>
          <div className="top-logo">
            <p className="top-logo-name">
              <span>S</span>CORE <span>G</span>ENERATOR
            </p>
            <p className="top-logo-name-subtitle">Everyone join hosting.</p>
          </div>
        </div>
      </MAIN_VISUAL_STYLE>
    </>
  );
}

const MAIN_VISUAL_STYLE = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;

  .top-content-width {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1720px;
    width: calc(100vw -200px);
  }

  .top-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.8em;
    white-space: nowrap;
  }

  .top-logo-name {
    font-size: 32px;
  }

  .top-logo-name span {
    color: ${common.HIGHT_LIGHT_COLOR};
  }

  .top-logo-name-subtitle {
    font-size: 24px;
  }

  .splide__slide img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 15px;
  }
`;
