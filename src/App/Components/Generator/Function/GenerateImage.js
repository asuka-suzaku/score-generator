export async function DomToImage() {
  const canvas = document.getElementById("element");
  console.log(canvas.clientHeight);
  // const dataURL = canvas.toDataURL();
  // console.log(dataURL);
}

function CreateUrl(BlobData) {
  return new Promise((resolve) => {
    const tempUrl = URL.createObjectURL(BlobData);
    resolve(tempUrl);
  });
}

function CreateBlob(data) {
  return new Promise((resolve) => {
    const blob = new Blob([data, { type: "image/svg+xml" }]);
    resolve(blob);
  });
}

function ReactElement(img, context, canvas) {
  return new Promise((resolve) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0);
    resolve();
  });
}

//svgに出力して書き出し。


//table => clientHight使ったりして要素の場所を取得してsvgの方にも登録する