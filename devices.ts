
import { devicesDI } from './di-registry';

export const DevicesModule = () => {
  const {log, db} = devicesDI;

  const destroy = () => {
    log.debug('destroy!!!')
    db.destroy();
  }
  return { destroy }
}
