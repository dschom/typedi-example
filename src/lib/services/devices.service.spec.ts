
import 'reflect-metadata';
import { app } from '../di-registry';
import { Devices } from './devices.service';

describe('testing devices using DI', () => {
  let devices:Devices;
  let logSpy:jest.SpyInstance;

  beforeEach(() => {
    // Use DI to get the class
    devices = app.devices;
    // Mocking and spying on things is very straight forward since they are injected
    logSpy = jest.spyOn(devices.log, 'debug').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls db.destroy when destroy is invoked', () => {
    devices.getDevices('123');
    expect(logSpy).toHaveBeenCalledWith('TODO')
  });
});


describe('testing devices sans di', () => {
  let devices:Devices;
  const mockLog = {
    debug: jest.fn()
  } as any;
  const mockDb = {
    getDevices: jest.fn(),
  } as any;

  beforeEach(() => {
    // Alternatively you can directly test the class sans DI, which might be better for more involved mocking.
    devices = new Devices(
      mockLog, 
      mockDb
    )
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls db.destroy when destroy is invoked', () => {
    devices.getDevices('123');
    expect(mockLog.debug).toHaveBeenCalledWith('TODO');
    expect(mockDb.getDevices).toHaveBeenCalledWith('123');
  });
});


