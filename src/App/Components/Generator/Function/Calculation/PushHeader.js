export function PushHeaderJa(data) {
  return new Promise((resolve) => {
    const amount = data[0].length;
    const temporaryArray = [];
    for (let i = 0; i < amount; i++) {
      switch (i.toString()) {
        case "0":
          temporaryArray.push("順位");
          break;
        case "1":
          temporaryArray.push("チーム名");
          break;
        case `${amount - 2}`:
          temporaryArray.push("キルポイント");
          break;
        case `${amount - 1}`:
          temporaryArray.push("合計");
          break;
        default:
          temporaryArray.push(`${i - 1}試合目`);
      }
    }
    data.unshift(temporaryArray);
    resolve(data);
  });
}

export function PushHeaderEn(data) {
  return new Promise((resolve) => {
    const amount = data[0].length;
    const temporaryArray = [];
    for (let i = 0; i < amount; i++) {
      switch (i.toString()) {
        case "0":
          temporaryArray.push("RANK");
          break;
        case "1":
          temporaryArray.push("TEAM");
          break;
        case `${amount - 2}`:
          temporaryArray.push("KILL POINT");
          break;
        case `${amount - 1}`:
          temporaryArray.push("TOTAL");
          break;
        default:
          temporaryArray.push(`${i - 1}ST MATCH`);
      }
    }
    data.unshift(temporaryArray);
    resolve(data);
  });
}
