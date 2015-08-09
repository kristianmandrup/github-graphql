import github from '../../src/github-graphql';

describe('github', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(github, 'greet');
      github.greet();
    });

    it('should have been run once', () => {
      expect(github.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(github.greet).to.have.always.returned('hello');
    });
  });
});
