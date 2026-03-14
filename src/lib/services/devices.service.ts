
import { Inject, Service } from 'typedi';
import { Log, LOGGING } from '../utils/logging';
import { DB } from './db.service';

// EXP: The following should throw a linter error
// import { Container } from 'typedi';

// Create a service class per module. Ideally this class holds the logic, but for backwards compatibility
// we can simply declare the DI dependencies with @Inject. Over time we migrate logic from the .js module
// over this service class.
@Service()
export class Devices {
  constructor(
    @Inject(LOGGING)
    public readonly log:Log,
    @Inject()
    public readonly db:DB,
  ) {}

  public getDevices(uid:string) {
    this.log.debug('TODO');
    this.db.getDevices(uid);
  }
}
