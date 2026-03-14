
// We run this right away to validate DI
import { app } from './lib/di-registry';

app.log.debug("Starting");

const config= { setting:1};

// mimic server startup
function start() {
    // This is a common pattern in auth-server
    require('./lib/devices')(
        // Eventually we'd like to DI everything.
        config
    ).destroy();
}

// Add delay just to illustrate effects of DI setup
setTimeout(start, 3000);


