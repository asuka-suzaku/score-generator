//並べ替え
export default function CalcSort(funcInData) {
  const len = funcInData[0].length;
  return new Promise((resolve) => {
    funcInData.sort((a, b) => {
      return b[len - 1] - a[len - 1];
    });
    resolve(funcInData);
  });
}
