export function FileToCsv(file, setData) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const csvContents = reader.result;
      // テキスト>配列に変更
      const rowCsv = csvContents.split("\n");
      //＼rを取り除く
      const replace = rowCsv.map((data) => data.replace(/\r/g, ""));
      //2次元配列に変換
      const csvArray = replace.map((data) => data.split(","));
      //   setData(csvArray);
      resolve(csvArray);
    };
  });
}
