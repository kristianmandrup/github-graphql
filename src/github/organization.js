'use strict';

import GithubElement from './github_element.js' ;

module.exports = class Organization  extends GithubElement {

  constructor(org, octo){
    super(org, octo);
  }
}
