
import { Container } from 'typedi';

// None of these Container.get calls are actually gauraunteed / checked at startup. 
// We should disallow using container.get expect in special DI registration class.
const log = Container.get<{ debug:(msg:string)=>void }>('LOGGING');
const db = Container.get<{ destroy:()=>void }>('DB');

export const DevicesModule = () => {
  const destroy = () => {
    log.debug('foo')
    db.destroy();
  }
  const instance = { destroy };

  return instance;
}
