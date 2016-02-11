var images = [];
var names = ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"];

function Image(name) {
  this.name = name;
  this.path = "media/" + name + ".jpg";
  this.votes = 0;
};

var Tracker = {
  leftEl: document.getElementById("leftChoice"),
  centerEl: document.getElementById("centerChoice"),
  rightEl: document.getElementById("rightChoice"),
  numRandomizer: function () {
    return.Mathfloor(Math.random( * (images.length -1));
  },
  pickImages: function() {
    var img


}
