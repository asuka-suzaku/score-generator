//キルポイントの部分を削除
export default function SortOutData(funcInData) {
  return new Promise((resolve) => {
    const temporaryArray = [];
    for (let z = 0; z < funcInData.length; z++) {
      temporaryArray.push(funcInData[z]);
    }

    for (let i = 0; i < temporaryArray.length; i++) {
      for (let x = temporaryArray[i].length; 0 < x; x--) {
        if (x != 1 && x % 2 === 0) {
          funcInData[i].splice(x, 1);
        }
      }
    }
    resolve();
  });
}
