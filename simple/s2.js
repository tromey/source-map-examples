let {f} = require("./s1");

function clickme() {
  console.log("in clickme");
  f();
}

window.clickme = clickme;
