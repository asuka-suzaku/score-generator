export async function TestAwait(file) {
  const reader = new FileReader();

  let r = [];

  reader.readAsText(file);

  await new Promise((resolve) => {
    reader.onload = () => {
      const csvContents = reader.result;
      resolve(csvContents);
    };
  }).then((data) => {
    // テキスト>配列に変更
    const rowCsv = data.split("\n");
    //＼rを取り除く
    const replace = rowCsv.map((data) => data.replace(/\r/g, ""));
    //2次元配列に変換
    const csvArray = replace.map((data) => data.split(","));

    r = csvArray;
  });
  console.log(r);
}
