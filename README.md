# sails-hook-rate-limit

This Sails hook is a wrapper of [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit)

## Installation

```sh
npm i --save sails-hook-rate-limit
```

## Setup

Create a `rate-limit.js` config file in `config/`.

```js
module.exports.rateLimit = {
  windowMs: 10 * 60 * 1000 // 10 minutes
  max: 100,
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}
```

> The config object takes the same properties and methods as described in the [configuration docs](https://github.com/express-rate-limit/express-rate-limit#configuration) of `express-rate-limit`
