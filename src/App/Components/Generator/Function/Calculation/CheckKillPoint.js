export default function CheckKillPoint(funcInData, killPoint) {
  return new Promise((resolve) => {
    if (Number(killPoint) === 0) {
      for (let i = 0; i < funcInData.length; i++) {
        const target = funcInData[i].length - 2;
        funcInData[i].splice(target, 1);
      }
    }
    resolve(funcInData);
  });
}
