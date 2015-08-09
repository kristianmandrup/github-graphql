Payments
========

> Simple koa static server for handling Braintree payments/transactions

Include `config/credentials.js` file, something like:

```js
module.exports = {
  merchantId:   'c43fjng9fzfjn7zc',
  publicKey:    '62hvbxhbfw4zkz2z',
  privateKey:   'b22668e3e4492269f3cac791aba25b3d'  
}
```

[Koa Server overview](http://koajs.com/)

Start the server!

`npm start`

It starts in `index.js` then `lib/server.js`

### Koa examples

Check out https://github.com/koajs/examples for a lot of good examples for common Koa use cases :)

[Intro to Koa generators](http://code.tutsplus.com/tutorials/introduction-to-generators-koajs-part-2--cms-21756)

Add Rate limit and logger:

```js
var logger = require('koa-logger');
var limit = require('koa-better-ratelimit');
//Add the lines below just under error middleware.
app.use(limit({ duration: 1000*60*3 , // 3 min
                max: 10, blacklist: []}));
app.use(logger());
```

Testing:

```js
var request = require('supertest');
var api = require('../index.js');

describe('GET all', function(){
  it('should respond with all the words', function(done){
    var app = api;
    request(app.listen())
    .get('/v1/all')
    .query({ word: 'new' })
    .set('Accept-Encoding', 'gzip')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(done);
  })
})
```

### Production

To run our applications in production, we will use PM2, which is an useful Node process monitor. We should disable the logger app while in production; it can be automated using environment variables.

`npm install pm2 -g`

`pm2 start index.js --node-args="--harmony"`

Now, even if our application crashes, it will restart automatically and you can sleep soundly.

### Mounting apps

[Mount](https://github.com/koajs/mount) and [Power of mounting](http://www.marcusoft.net/2015/04/koa-js-and-the-power-of-mouting.html\)

Can be used to mount multiple payment gateway apps on the same Server instance with different base routes. Awesome!!!

[Mount demos](https://github.com/marcusoftnet/mountDemos)

### Tests

Use Mocha or Karma with Sinon and Chai ;)

Using a variation of setup as per: https://github.com/Kevnz/slush-test/ at least for now...

Look at [basic-koa-api-gulp-supertest](http://russmatney.com/techsposure/basic-koa-api-gulp-supertest/)

-	[Mocha](https://mochajs.org/)
-	[Chai](http://chaijs.com/)
-	[SinonJs](http://sinonjs.org/)

See `build/tasks/test.js` and `/test` folder.

### Client app

Use: https://github.com/babel/generator-babel-boilerplate to get going ;)
