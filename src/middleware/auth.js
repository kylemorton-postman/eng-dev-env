const jwt = require('jsonwebtoken');
const config = require('../config');

// Bearer token auth — mirrors the `bearerAuth` security scheme in index.yaml.
module.exports = function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({
      error: {
        code: 'UNAUTHORIZED',
        message: 'Authentication is required to access this resource.',
      },
    });
  }

  try {
    req.user = jwt.verify(token, config.jwtSecret);
    return next();
  } catch (_err) {
    return res.status(401).json({
      error: { code: 'UNAUTHORIZED', message: 'Bearer token is missing or has expired.' },
    });
  }
};
