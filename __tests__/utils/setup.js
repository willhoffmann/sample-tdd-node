const DatabaseMemoryServer = require('../../src/config/DatabaseMemoryServer');

module.exports = async () => {
  await DatabaseMemoryServer.start();
}
