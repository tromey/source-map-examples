var f = require("./s1").f;

function clickme() {
  console.log("in clickme");
  f();
}

window.clickme = clickme;

window.loaded = function() {
  var b = document.getElementById("button");
  b.addEventListener("click", clickme);
};
