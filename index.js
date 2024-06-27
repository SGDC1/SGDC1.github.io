var element = document.documentElement;

function optionsMenu() {
  option = prompt("Options: \n 1. Fullscreen");
  if(option == 1) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
