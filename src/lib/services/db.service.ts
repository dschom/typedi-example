import { Inject, Service } from 'typedi';
import { Log, LOGGING } from '../utils/logging';

// Let's imagine that we have comletely convereted our DB service over.
@Service()
export class DB {

  constructor(
    @Inject(LOGGING)
    private readonly log:Log
  ) {}

  destroy() {
    this.log.debug(`DB.destroy`)
  }

  getDevices(uid:string) {
    this.log.debug('TODO', uid)
  }
}