
import { log } from './di-registry';
import {DevicesModule} from './devices';

log.debug("Starting");

const d = DevicesModule();

d.destroy();

log.debug('Finished')
