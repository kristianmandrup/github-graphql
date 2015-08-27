import Octokat from 'octokat';
import chai from 'chai';
import { graphql } from 'graphql';
import schema from '../../../src/graphql/schemas';

export default (query, resultExpect, done) => {
  let user = {};

  //TODO: change by a fake github server
  user.octo = new Octokat({
    username: 'freddyucv',
    password: 'leones2009'
  });

  graphql(schema, query, user).then((data) => {
    done();
    expect(data.data).to.deep.equal(resultExpect);
  });
};
