

function start() {
    // We have plenty of stuff like this in auth server...
    require('./devices')().destroy();
}

setTimeout(() => { start(); }, 3000);
console.log('server started')
