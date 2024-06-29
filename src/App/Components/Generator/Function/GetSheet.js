import axios from "axios";
import { useEffect, useState } from "react";

export function GetSheet(setSheetData) {
  const dataContent = document.getElementById("url");
  const data = dataContent.value;
  const errorArea = document.getElementById("errorUrl");

  if (data.length !== 0) {
    const necessary = "https://docs.google.com/spreadsheets/";
    const result = data.indexOf(necessary);

    if (result == -1) {
      errorArea.textContent = "スプレッドシートのurlを入力してください";
    } else {
      const GetValue = async () => {
        console.log("api呼び出し");
        const value = await axios
          .get(
            `https://sheets.googleapis.com/v4/spreadsheets/1lnBUPLZN4Pfxeaf0e3p_UcKHKeBOQ02GG2Nm3LUAEQM/values/A1:Y110?key=AIzaSyBgGFZUpa6IFJF3uhw_doGoCMqiDFdai5s`
          )
          .then((res) => setSheetData(res.data.values))
          .catch((e) => console.log(e));
      };
      GetValue();
    }
  } else {
    errorArea.textContent = "ulrが入力されていません";
  }
}

export function Validation() {
  const dataContent = document.getElementById("url");
  const data = dataContent.value;
  const errorArea = document.getElementById("errorUrl");

  if (data.length !== 0) {
    const necessary = "https://docs.google.com/spreadsheets/";
    const result = data.indexOf(necessary);

    if (result == -1) {
      errorArea.textContent = "スプレッドシートのurlを入力してください";
    } else {
      errorArea.textContent = "正常";
    }
  } else {
    errorArea.textContent = "urlを入力してください";
  }
}

const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1lnBUPLZN4Pfxeaf0e3p_UcKHKeBOQ02GG2Nm3LUAEQM/edit?usp=sharing";
const id = "1lnBUPLZN4Pfxeaf0e3p_UcKHKeBOQ02GG2Nm3LUAEQM";
const apiKey = "AIzaSyBgGFZUpa6IFJF3uhw_doGoCMqiDFdai5s";

// https://sheets.googleapis.com/v4/spreadsheets/${id}/values/A1:Y110?${apiKey}
export async function Sheet() {
  const data = await axios
    .get(
      `https://sheets.googleapis.com/v4/spreadsheets/1lnBUPLZN4Pfxeaf0e3p_UcKHKeBOQ02GG2Nm3LUAEQM/values/A1:Y110?key=AIzaSyBgGFZUpa6IFJF3uhw_doGoCMqiDFdai5s`
    )
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
}
