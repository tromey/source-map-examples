let {f} = require("./s1");

function clickme() {
  console.log("in clickme");
  f();
}

window.clickme = clickme;

window.loaded = function() {
  let b = document.getElementById("button");
  b.addEventListener("click", clickme);
};
