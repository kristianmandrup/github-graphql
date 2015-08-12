'use strict';

module.exports = class Organization  {

  constructor(org){
    this.info = {};

    for (var key in org) {
      if (org.hasOwnProperty(key)) {
        let value = org[key];

        if (typeof value != 'function'){
          this.info[key] = value;
        }
      }
    }


  }
}
