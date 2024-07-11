import html2canvas from "html2canvas";

export function CreateImage(width, hight) {
  const element = document.getElementById("CreateImg");
  const option = {
    backgroundColor: null,
    scale: 1,
    width: width,
    height: hight,
  };
  html2canvas(element, option).then((canvas) => {
    const anchor = document.createElement("a");
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "SCORE-GENERATOR.png";
    anchor.click();
  });
}
