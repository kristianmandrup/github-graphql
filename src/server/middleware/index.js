const mws = ['basic', 'errors', 'routers', 'static'];

let mwMap = {};
for (let mw of mws) {
  mwMap[mw] = require(`./${mw}-mw`);
}

export default function(app) {
  for (let name of mws) {
    mwMap[name](app);
  }
}
