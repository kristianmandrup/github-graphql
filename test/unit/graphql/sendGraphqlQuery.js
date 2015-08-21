import { stringify } from 'querystring';

export default function(opts) {
  var url = '/graphql?' + stringify({query: opts.query});

  opts.app.get(url)
    .set('Set-Cookie', opts.cookies)
    .expect(200)
    .end((err, res) => {
      if (err) {
        throw err;
      }

      expect(res.body.data).to.deep.equal(opts.resultExpect);
      opts.done();
    });
}
