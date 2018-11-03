const defaults = require('defaults')

/**
 * Express middleware to enforce HTTPS-only connections
 * @param {Object} options Options object
 * @see https://github.com/js-rcon/express-enforce-https#readme
 */
function enforceHttps (options) {
  options = defaults(options, {
    statusCode: 403,
    message: 'Insecure connection detected, please switch to HTTPS.',
    handler: (req, res, next) => {
      res.status(options.statusCode).send(options.message)
    }
  })

  return (req, res, next) => {
    // Use req.protocol as a fallback in case req.secure changes
    if (!req.secure || req.protocol !== 'https') return options.handler(req, res, next)
    return next()
  }
}

module.exports = enforceHttps
