export default function SortFontsData(data) {
  return new Promise((resolve) => {
    const temporaryArray = [];

    for (let i = 0; i < Object.keys(data.data.items).length; i++) {
      const forInArray = [];

      for (let x = 0; x < Object.keys(data.data.items[i].files).length; x++) {
        const dataArray = [];
        dataArray.push(data.data.items[i].family);
        dataArray.push(data.data.items[i].category);
        dataArray.push(data.data.items[i].variants[x]);
        const files = data.data.items[i].files;

        const filesKeys = Object.keys(data.data.items[i].files);

        for (let z = 0; z < Object.keys(data.data.items[i]).length; z++) {
          if (data.data.items[i].variants[x] === filesKeys[z]) {
            const num = filesKeys[z];
            dataArray.push(data.data.items[i].files[num]);
          }
        }
        forInArray.push(dataArray);
      }
      temporaryArray.push(forInArray);
    }
    resolve(temporaryArray);
  });
}
