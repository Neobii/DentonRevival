module.exports = {
  servers: {
    one: {
      host: '104.236.71.197',
      username: 'root',
      password: 'Dentonrage1',
      // pem: './mykey',
    },
  },

  meteor: {
    name: 'dentonRevival',
    path: '../',
    servers: {
      one: {},
    },
    env: {
      ROOT_URL: 'http://104.236.71.197',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
