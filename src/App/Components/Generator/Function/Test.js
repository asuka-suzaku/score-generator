export default function Test(data) {
  const csvFile = data;

  console.log("テスト関数です。");
  const reader = new FileReader();
  reader.onload = function (e) {
    const csvData = e.target.result;
    const lines = csvData.split("\n");
    const result = lines.map((line) => line.split(","));
    console.log(result);
  };
}

// 6/10
// 明日やること
// funcの前に変数定義して関数内と関数外で関数使えるかの検証
