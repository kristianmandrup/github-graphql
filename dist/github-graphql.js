(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.github = factory();
})(this, function () {
  'use strict';

  // require('./server');

  var github = {
    greet: function greet() {
      return 'hello';
    }
  };

  var github_graphql = github;

  return github_graphql;
});
//# sourceMappingURL=github-graphql.js.map
