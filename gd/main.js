const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function setup() {
  draw("img", 0, 0, "icon_1.png"); //player
  draw("img", 0, 250, "floor.png"); //ground
}

function draw(type, x, y, src) {
  switch (type) {
    case "img":
      let img = new Image();
      img.src = src;
      img.onload = () => ctx.drawImage(img, x, y);
      break;
    default:
      console.log("Switch default;");
  }
}
