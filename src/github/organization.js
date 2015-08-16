'use strict';

import GithubElement from './github_element.js' ;

export default class Organization extends GithubElement {
  /*
  * @param {String} Organization name
  * @param {Octokat} Octokat instance
  */
  constructor(org, octo) {
    super(org, octo);
  }
}
