const mongoose = require('mongoose');

class Database {
  async connect() {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(
        process.env.NODE_ENV === 'test' ? global.__DB_URL__ : process.env.DB_URL,
        {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        }
      );
    }
  }

  async truncate() {
    if (mongoose.connection.readyState !== 0) {
      const { collections } = mongoose.connection;

      const promises = Object.keys(collections).map(collection =>
        mongoose.connection.collection(collection).deleteMany({})
      );

      await Promise.all(promises);
    }
  }

  async disconnect() {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
  }
}

module.exports = new Database();
