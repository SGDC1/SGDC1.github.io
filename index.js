var element = document.documentElement;

function optionsMenu() {
  if(prompt("Options: \n 1. Fullscreen") == 1) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
