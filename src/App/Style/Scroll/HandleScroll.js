export function headerMenuFunc() {
  document.addEventListener("touchmove", handleTouchMove, { passive: false });
}

function handleTouchMove(e) {
  e.preventDefault();
}
