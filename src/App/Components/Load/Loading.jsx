import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { WindowAtom } from "../../Store/StylesAtom";
import * as common from "../../Style/Common/Common";

export default function LoadingPage() {
  const [Window, setWindow] = useRecoilState(WindowAtom);
  useEffect(() => {
    const win = document.body.clientWidth;
    setWindow(win);
  }, []);
  return (
    <>
      <LOADING_STYLE>
        <div className="loading">
          <div className="loading-content">
            <img className="logo" src="/img/logo/loadingLogo.png" alt="" />
            <div className="text">
              <p className="app-title">
                <span className="hi-light">S</span>CORE<span> </span>
                <span className="hi-light">G</span>ENERATOR
              </p>
              <p className="app-subtitle">Everyone join hosting.</p>
            </div>
          </div>
        </div>
      </LOADING_STYLE>
    </>
  );
}

const LOADING_STYLE = styled.div`
  display: block;
  animation-name: fadeOut;
  animation-timing-function: linear;
  animation-duration: 6s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  background-color: ${common.MAIN_COLOR};
  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    color: #20232a;
    white-space: nowrap;
  }

  .loading-content {
    display: flex;
    align-items: center;
  }

  p {
    font-family: "Almarai", sans-serif;
    font-weight: 700;
  }

  .app-title {
    font-size: 32px;
    position: absolute;
    animation-name: loading-app-title;
    animation-fill-mode: both;
    animation-duration: 5s;
    animation-iteration-count: 1;
    background-color: #f4f4ef;
    z-index: 2;
  }

  .hi-light {
    color: #a01d26;
  }

  .app-subtitle {
    color: #f4f4ef;
    font-size: 24px;
    position: absolute;
    opacity: 0;
    animation-name: loading-app-subtitle;
    animation-fill-mode: both;
    animation-duration: 5s;
    animation-iteration-count: 1;
    z-index: 1;
  }
  .logo {
    width: 300px;
  }

  .logo {
    animation-name: loading-logo;
    animation-fill-mode: both;
    animation-duration: 5s;
    animation-iteration-count: 1;
    position: relative;
    z-index: 3;
  }

  @keyframes fadeOut {
    /* 6s */
    0% {
      opacity: 1;
    }

    90% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes loading-logo {
    0% {
      transform: translateX(10em);
    }

    20% {
      transform: translateX(-15em);
    }

    100% {
      transform: translateX(-15em);
    }
  }

  @keyframes loading-app-title {
    0% {
      transform: translate(-6em, 0);
      opacity: 0;
    }

    30% {
      transform: translate(-6em, 0);
      opacity: 1;
    }
    40% {
      transform: translate(-6em, -1em);
      opacity: 1;
    }

    90% {
      transform: translate(-6em, -1em);
      opacity: 1;
    }

    100% {
      transform: translate(-6em, -1em);
      opacity: 1;
    }
  }

  @keyframes loading-app-subtitle {
    0% {
      transform: translate(-7em, -3em);
      opacity: 0;
      color: #f4f4ef;
    }

    40% {
      color: #20232a;
    }
    50% {
      transform: translate(-7em, -3m);
      opacity: 0;
      color: #20232a;
    }

    70% {
      transform: translate(-7em, 0);
      opacity: 1;
      color: #20232a;
    }

    100% {
      transform: translate(-7em, 0);
      opacity: 1;
      color: #20232a;
    }
  }

  @media screen and (max-width: 1200px) {
    .logo {
      width: 200px;
    }

    @keyframes loading-logo {
      0% {
        transform: translateX(10em);
      }

      20% {
        transform: translateX(-12em);
      }

      100% {
        transform: translateX(-12em);
      }
    }

    @keyframes loading-app-title {
      0% {
        transform: translate(-5em, 0);
        opacity: 0;
      }

      30% {
        transform: translate(-5em, 0);
        opacity: 1;
      }
      40% {
        transform: translate(-5em, -1em);
        opacity: 1;
      }

      90% {
        transform: translate(-5em, -1em);
        opacity: 1;
      }

      100% {
        transform: translate(-5em, -1em);
        opacity: 1;
      }
    }

    @keyframes loading-app-subtitle {
      0% {
        transform: translate(-6em, -2em);
        opacity: 0;
        color: #f4f4ef;
      }

      40% {
        color: #20232a;
      }
      50% {
        transform: translate(-6em, -2m);
        opacity: 0;
      }

      70% {
        transform: translate(-6em, 0);
        opacity: 1;
      }

      100% {
        transform: translate(-6em, 0);
        opacity: 1;
        color: #20232a;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .logo {
      width: 150px;
    }

    .loading-content {
      flex-direction: column;
      justify-content: center;
    }

    .app-title {
      font-size: 24px;
      position: relative;
    }

    .app-subtitle {
      font-size: 18px;
      position: relative;
    }
    @keyframes loading-logo {
      0% {
        transform: translate(10em, 0);
      }

      20% {
        transform: translate(0, 0);
      }

      40% {
        transform: translate(0, -3em);
      }

      100% {
        transform: translate(0, -3em);
      }
    }

    @keyframes loading-app-title {
      0% {
        transform: translate(0, -3em);
        opacity: 0;
      }

      40% {
        transform: translate(0, -3em);
        opacity: 0;
      }

      60% {
        transform: translate(0, -1em);
        opacity: 1;
      }

      90% {
        transform: translate(0, -1em);
        opacity: 1;
      }

      100% {
        transform: translate(0, -1em);
        opacity: 1;
      }
    }

    @keyframes loading-app-subtitle {
      0% {
        transform: translate(1em, -3em);
        opacity: 0;
        color: #f4f4ef;
      }

      60% {
        transform: translate(1em, -3em);
        opacity: 0;
        color: #20232a;
      }

      80% {
        transform: translate(1em, -1em);
        opacity: 1;
      }

      100% {
        transform: translate(1em, -1em);
        opacity: 1;
        color: #20232a;
      }
    }
  }
`;
