import 'reflect-metadata';
import { Container, Inject, Service, Token } from 'typedi';
import { log, Log, LOGGING } from './utils/logging';
import { StatsD } from 'hot-shots';
import { Devices } from './services/devices.service';

// This is the only module that Container.get and Container.set are permitted to be used in!

// Direct reigstration... Things that can't be done via @Service decorators
export { LOGGING };
Container.set(LOGGING, log);

export const STATSD = new Token<StatsD>();
Container.set(STATSD, new StatsD())


// Register all top level modules here. This will create a 'tree'
// of module dependencies, and will ensure that all services exist
// and have been registered.
@Service()
export class App {
  constructor(
    @Inject(LOGGING)
    public readonly log:Log,
    @Inject()
    public readonly devices:Devices,
    // TODO: Keep registering injected modules
  ) {}
}

// Validates all di registrations and creates an 'app instance'
export const app = Container.get(App);
