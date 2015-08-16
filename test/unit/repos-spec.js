var Octokat = require('octokat');

describe('Octokat repos', () => {
  var octo;
  before(() => {
    octo = new Octokat({
      username: 'freddyucv',
      password: 'password'
    });
  });

  describe('#repos', () => {
    var repos;
    before(() => {
      repos = octo.repos('freddyucv', 'hello-world');
    });

    describe('#fetch', () => {
      it('fetches repos', () => {
        repos.fetch().then(function(data) {
          console.log('repos ' + JSON.stringify(data));
          expect(data).to.not.eql({});
        });
      });
    });

    describe('#contents', () => {
      var readme;
      before(() => {
        readme = repo.contents('README.md');
      });

      it('contains title: Hello World', () => {
        expect(readme.read()).to.eql('Hello World');
      });
    });

    describe('#issues', () => {
      it('fetches issues', () => {
        repos.issues().then(function(data) {
          console.log('issues ' + JSON.stringify(data));
          expect(data).to.not.eql({});
        });
      });

      describe('#comments', () => {
        describe('1st issue', () => {
          var repos;
          before(() => {
            issue = repos.issues(1);
          });

          it('has no comments', () => {
            expect(issue.comments).to.not.eql({});
          });
        });

        describe('2nd issue', () => {
          var repos;
          before(() => {
            issue = repos.issues(1);
          });

          it('has comments', () => {
            expect(issue.comments.length).to.be.gt(0);
          });
        });
      });
    });
  });
});
