var images = [];
var names = ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"];

function Image(name) {
  this.name = name;
  this.path = "media/" + name + ".jpg";
  this.votes = 0;
};
