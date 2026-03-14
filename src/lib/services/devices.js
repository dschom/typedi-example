
const { app } = require('../di-registry');

// This is a common pattern we have for modules in auth-server. Let's imagine we have yet to convert the devices
// JS module over to typescript and DI services
// eslint
module.exports = (config) => {


  // We can still get the app, which has under gone di validation, and use it to 
  // fetch depencencies. This will always be safe and won't result in random runtime
  // failure that Container.get(...) would result in. Interestingly enough, the intellisense
  // works here! And we get to reuse our DI
  const { log, db } = app.devices;

  // EXP: This should result in a linter error, which prevents us from using Container.get or Container.set
  // outside of di-registry.ts;
  // const { Container } = require('typedi');

  return { 
    // It'd be much nice to migrate the logic over to the devices.service class, but we have a lot of legacy code, so 
    // this maintains backwards compatibility.
    destroy() {
      if (config.disabled === true) 
          return;
      
      // Use scope dependencies defined by service class.
      log.debug('destroy!!!')
      db.destroy();
    }
  }
}
