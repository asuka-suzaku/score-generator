export function PushRankJa(funcInData) {
  return new Promise((resolve) => {
    for (let i = 0; i < funcInData.length; i++) {
      funcInData[i].unshift(`${i + 1}位`);
      resolve(funcInData);
    }
  });
}

export function PushRankEn(funcInData) {
  return new Promise((resolve) => {
    for (let i = 0; i < funcInData.length; i++) {
      funcInData[i].unshift(`NO.${i + 1}`);
      resolve(funcInData);
    }
  });
}
