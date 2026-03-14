import { app } from '../di-registry';

describe('devices', () => {
  let devices:{destroy:() => void};
  const mockConfig = {};
  const mockGlean = {};
  let dbDestroySpy: jest.SpyInstance;
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    // Mocking is simply, just spy on the app!
    dbDestroySpy = jest.spyOn(app.devices.db, 'destroy').mockImplementation(() => {});
    logSpy = jest.spyOn(app.devices.log, 'debug').mockImplementation(() => {});

    // Require JS module, legacy syntax
    devices = require('./devices')(mockConfig, mockGlean);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls db.destroy when destroy is invoked', () => {
    devices.destroy();
    expect(dbDestroySpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('destroy!!!');
  });
});
