export function GetIrregularPointValue(data, setData) {
  const elemSum = data.fileConfig?.howLong;
  let dataArray = [];
  if (elemSum) {
    for (let i = 0; i < elemSum; i++) {
      const dom = document.getElementById(`irregularPoint-${i + 1}`);
      const value = dom?.value ? dom.value : "0";
      dataArray.push(value);
    }
  }

  const exArray = [];

  for (let x = 0; x < dataArray.length; x++) {
    let irregularPointList = {};
    irregularPointList["rank"] = x + 1;
    irregularPointList["point"] = dataArray[x];
    exArray.push(irregularPointList);
  }

  setData(exArray);
}
