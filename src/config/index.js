module.exports = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'change-me',
  logLevel: process.env.LOG_LEVEL || 'info',
};
