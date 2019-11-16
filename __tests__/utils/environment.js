const NodeEnvironment = require('jest-environment-node');

const DatabaseMemoryServer = require('../../src/config/DatabaseMemoryServer');

class CustomEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    this.global.__DB_URL__ = await DatabaseMemoryServer.getConnectionString();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment;
