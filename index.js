/**
 * treblle hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineRateLimitHook(sails) {
  return {
    defaults: {
      rateLimit: {
        windowMs: 10 * 60 * 1000, // 10 minutes
        max: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes)
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
      },
    },
    /**
     * Runs when this Sails app loads/lifts.
     */
    initialize: async function () {
      sails.log.info('Initializing custom hook (`rate-limit`)')

      const rateLimit = require('express-rate-limit')
      const limiter = rateLimit(sails.config.rateLimit)

      sails.after('hook:http:loaded', () => {
        sails.hooks.http.app.use(limiter)
      })
    },
  }
}
