module.exports = {
  port: process.env.PORT || 4000,
  db: {
    production: process.env.MONGODB_URI,
    development: 'mongodb://localhost/spaces-development',
    test: 'mongodb://localhost/spaces-test'
  },
  secret: process.env.SECRET || 'we have a car parking space'
}
