function init() {
  let worker = new Worker("bundle.js");
  worker.postMessage("rosetta");
}
