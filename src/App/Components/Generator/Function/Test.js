export default function Test(data, handleAtom, CsvAtom) {
  const csvFile = data;
  console.log(csvFile);

  console.log("テスト関数です。");
  const reader = new FileReader();

  //読み込み後発火
  reader.onload = (e) => {
    //データの取得
    const csvContents = e.target.result;
    //テキスト>配列に変更
    const rowCsv = csvContents.split("\n");
    //＼rを取り除く
    const replace = rowCsv.map((data) => data.replace(/\r/g, ""));
    //2次元配列に変換
    const csvArray = replace.map((data) => data.split(","));
    document.getElementById("text").textContent = csvArray;
  };

  reader.readAsText(csvFile);
}
