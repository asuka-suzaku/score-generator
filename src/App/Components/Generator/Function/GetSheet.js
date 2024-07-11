import axios from "axios";
export function GetSheet(setSheetData) {
  const dataContent = document.getElementById("url");
  const data = dataContent.value;
  const errorArea = document.getElementById("errorUrl");
  const API_KEY = process.env.REACT_APP_SHEET_API_KEY;

  if (data.length !== 0) {
    const necessary = "https://docs.google.com/spreadsheets/d/";
    const result = data.indexOf(necessary);

    if (result == -1) {
      errorArea.textContent = "スプレッドシートのurlを入力してください";
    } else {
      const GetValue = async () => {
        const before = 39;
        const front = data.indexOf(necessary);
        const back = data.indexOf("/", before + front);
        const id = data.substring(front + before, back);
        const value = await axios
          .get(
            `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/A1:Y110?key=${API_KEY}`
          )
          .then((res) => setSheetData(res.data.values))
          .catch((e) => {
            throw new Error(e);
          });
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
    const necessary = "https://docs.google.com/spreadsheets/d/";
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
