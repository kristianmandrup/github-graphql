'use strict';

module.exports = class GithubElement  {

  constructor(element, octo){
    this.info = {};

    for (var key in element) {
      if (element.hasOwnProperty(key)) {
        let value = element[key];

        if (typeof value != 'function'){
          this.info[key] = value;
        }
      }
    }

    this.octo = octo;
  }
}
