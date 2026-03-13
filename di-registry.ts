import 'reflect-metadata';
import { Container, Inject, Service, Token } from 'typedi';

// Token example
const LOGGING = new Token('LOGGING');
export const log = console;
Container.set(LOGGING, log);


@Service()
class DB {
  destroy() {}
}

// Example of non typedi service class
class Foo {}

// DI For lib/devices.ts
@Service()
class DevicesDI {
  constructor(
    @Inject(LOGGING)
    public readonly log:{debug:(msg:string)=> void},
    @Inject()
    public readonly db:DB,
    // Un commenting the following will fail, cause it's not a registered service
    // @Inject()
    // public readonly dep:Foo
  ) {}
}
export const devicesDI = Container.get(DevicesDI);
