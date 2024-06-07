import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./App/Style/Common/reset.css";
import styled from "styled-components";
import * as common from "./App/Style/Common/Common";
import Router from "./App/Route/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));

const GLOBAL_STYLE = styled.div`
  background-color: ${common.MAIN_COLOR};
  font-size: ${common.MAIN_FONT_SIZE}px;
  letter-spacing: 3px;
  font-family: ${common.MAIN_FONT_FAMILY};
  font-weight: ${common.MAIN_FONT_WIGHT};
  color: ${common.FONT_COLOR};
  line-height: 1.3em;
`;

root.render(
  <React.StrictMode>
    <GLOBAL_STYLE>
      <Router />
    </GLOBAL_STYLE>
  </React.StrictMode>
);

reportWebVitals();
