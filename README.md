# express-enforce-https

Customisable Express middleware to enforce HTTPS on requests.

## Summary

This is a really simple piece of middleware. When it detects that a request is using an insecure connection, it sends a response with a status code and message of your choice. You can also customise the handler function for insecure connections to tune express-enforce-https to your needs.

## Usage

The main middleware function takes an `options` object. More on configuration in the [Option reference](#option-reference) section.

```js
const enforceHttps = require('express-enforce-https')

const options = {
  statusCode: 403,
  message: 'Please switch to a HTTPS connection!'
}

app.use(enforceHttps(options))
```

## Option reference

### statusCode

The HTTP status code to send when a request is insecure. Defaults to `403`.

### message

The message to send in response to an insecure request. Can be a string, object or anything supported by Express' [res.send()](https://expressjs.com/en/api.html#res.send). Defaults to `'Insecure connection detected, please switch to HTTPS.'`.

### handler

The function to execute when an insecure connection is detected. This function has access to the `req`, `res` and `next` properties from Express, so you can change this any way you like.

Default:
```js
(req, res, next) => {
  res.status(options.statusCode).send(options.message)
}
```

Note: You lose access to the `options` object when overriding the handler function.

## License

MIT © Linus Willner and Curtis Fowler.
