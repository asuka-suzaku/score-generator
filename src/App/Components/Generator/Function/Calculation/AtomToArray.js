export default function AtomToArray(data) {
  return new Promise((resolve) => {
    const temporaryArray = [];
    for (let i = 0; i < data.length; i++) {
      const forInTemporaryArray = [];
      for (let x = 0; x < data[i].length; x++) {
        forInTemporaryArray.push(data[i][x]);
      }
      temporaryArray.push(forInTemporaryArray);
    }

    for (let n = 0; n < temporaryArray.length; n++) {
      if (temporaryArray[n].length % 2 === 0) {
        temporaryArray[n].push("");
      }
    }

    console.log(temporaryArray);
    resolve(temporaryArray);
  });
}
