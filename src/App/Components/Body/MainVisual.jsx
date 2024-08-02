import styled from "styled-components";
import * as common from "../../Style/Common/Common";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function MainVisual() {
  return (
    <>
      <MAIN_VISUAL_STYLE>
        <div className="main-vis-content">
          <div className="top-title">
            <p className="top-subtitle">Everyone join hosting.</p>
            <p className="top-message">
              無料で<span>大会に合わせた</span>
              <br className="break-message" />
              スコアシートを作成できます。
            </p>
          </div>
          <Splide
            options={{
              direction: "ltr",
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
              lazyLoad: false,
              cover: false,
            }}
          >
            <SplideSlide>
              <img width="100" src="/img/sample/sample-space.png" />
              <img
                className="shadow"
                width="100"
                height="30"
                src="/img/sample/shadow.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img width="100" src="/img/sample/sample-elegant.png" />
              <img
                className="shadow"
                width="100"
                height="30"
                src="/img/sample/shadow.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img width="100" src="/img/sample/sample-pop.png" />
              <img
                className="shadow"
                width="100"
                height="30"
                src="/img/sample/shadow.png"
                alt=""
              />
            </SplideSlide>
          </Splide>
        </div>
      </MAIN_VISUAL_STYLE>
    </>
  );
}

const MAIN_VISUAL_STYLE = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 9em;

  .main-vis-content {
    /* height: 70vh; */
    padding: 5em 0;
    width: calc(100vw - 200px);
    max-width: 1720px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .top-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.8em;
    margin-right: 2em;
    /* white-space: nowrap; */
  }

  .top-title span {
    color: ${common.HIGHT_LIGHT_COLOR};
  }

  .top-subtitle {
    font-size: 32px;
  }

  .top-message {
    font-size: 24px;
    margin-top: 1em;
  }

  .break-message {
    display: none;
  }

  @media screen and (max-width: 1430px) {
    .break-message {
      display: block;
    }
  }

  .shadow {
    margin-top: 1em;
  }

  .splide {
    height: calc(fit-content + 2em);
    width: 50%;
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

  .splide__arrow {
    top: 45%;
  }

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
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1100px) {
    margin-top: 1em;
    .main-vis-content {
      height: fit-content;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: calc(100vw - 100px);
    }
    .top-title {
      margin: 3em 2em;
      line-height: 2em;
    }

    .splide {
      width: 90%;
    }
  }
  @media screen and (max-width: 600px) {
    margin-top: 0;
    .main-vis-content {
      padding-top: 1em;
      width: 100vw;
    }
  }
`;
