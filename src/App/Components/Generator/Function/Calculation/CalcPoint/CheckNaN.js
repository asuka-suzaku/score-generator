export default function CheckNaN(funcInData, setError) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < funcInData.length; i++) {
      for (let x = 0; x < funcInData[i].length; x++) {
        if (funcInData[i][x] == "NaN") {
          const err = new Error("ファイルの入力に誤りがあります。");
          setError(err);
        }
      }
    }

    resolve();
  });
}
