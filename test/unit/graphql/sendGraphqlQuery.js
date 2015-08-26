import { stringify } from 'querystring';

export default function(opts) {
  //let url = '/graphql?' + stringify({query: opts.query});
  let url = '/testing';

  opts.app.get(url)
    .set('Cookie', opts.cookies)
    .expect(200, opts.done);
/*.end((err, res) => {
  if (err) {
    throw err;
  }

  expect(res.body.data).to.deep.equal(opts.resultExpect);
  opts.done();
});*/
}
