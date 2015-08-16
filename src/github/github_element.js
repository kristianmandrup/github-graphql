'use strict';

export default class GithubElement {
  /*
  * @param {Object} abstract element
  * @param {Octokat} Octokat instance
  */
  constructor(element, octo) {
    this.info = {};
    for (var key in element) {
      this.setInfo(element, key);
    }
    this.octo = octo;
  }

  /*
  * @param {Object} abstract element
  * @param {String} key in element
  */
  setInfo(element, key) {
    if (element.hasOwnProperty(key)) {
      let value = element[key];
      if (typeof value != 'function') {
        this.info[key] = value;
      }
    }
  }
}
