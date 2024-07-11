import styled from "styled-components";
import * as common from "../../Style/Common/Common";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRecoilValue } from "recoil";
import { WindowAtom } from "../../Store/StylesAtom";
import "@splidejs/react-splide/css";

export default function MainVisual() {
  const Window = useRecoilValue(WindowAtom);
  const width = Window ? Window : 0;
  return (
    <>
      <MAIN_VISUAL_STYLE>
        <div className="main-vis-content">
          <Splide
            options={{
              direction: "ltr",
              width: 500,
              width: `${width < 1200 ? "100%" : "60%"}`,
              start: 0,
              perPage: 1,
              gap: "1em",
              easing: "ease",
              arrows: true,
              autoplay: true,
              interval: 6000,
              rewind: true,
              speed: 500,
              rewindSpeed: 500,
              padding: { left: "4vw", right: "4vw" },
              lazyLoad: false,
              cover: false,
            }}
          >
            <SplideSlide>
              <img width="100" src="/img/sample/sample-space.png" />
            </SplideSlide>
            <SplideSlide>
              <img width="100" src="/img/sample/sample-elegant.png" />
            </SplideSlide>
            <SplideSlide>
              <img width="100" src="/img/sample/sample-pop.png" />
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

const MAIN_VISUAL_STYLE = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 3em;

  .main-vis-content {
    height: 70vh;
    width: calc(100vw - 200px);
    max-width: 1720px;
    display: flex;
    align-items: center;
    justify-content: space-around;
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

  .splide__track {
    display: block;
  }

  .splide__slide img {
    width: 100%;
    opacity: 1;
    z-index: 3;
    aspect-ratio: 16/9;
    border-radius: 15px;
    transition: all 0.7s 0s ease;
  }

  .splide__slide.is-next img,
  .splide__slide.is-prev img {
    opacity: 0.3;
    transition: all 0.7s 0s ease;
  }

  /* .splide__pagination--ttb {
    bottom: -1em !important;
  } */
  .splide__pagination button {
    background-color: #c88487;
    width: 10px;
    height: 10px;
  }

  .splide__pagination .is-active {
    background-color: #a01d26;
  }

  .splide__list {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .splide__slide {
    flex: 0 0 auto;
  }

  @media screen and (max-width: 1300px) {
    .main-vis-content {
      height: fit-content;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: calc(100vw - 100px);
    }

    .top-logo-name {
      margin-top: 3em;
    }
  }

  @media screen and (max-width: 600px) {
    .main-vis-content {
      width: 100vw;
    }
  }
`;
