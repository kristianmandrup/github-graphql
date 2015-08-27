'use strict';

import yaml from 'js-yaml';
import fs   from 'fs';
import path from 'path';

var dir = path.resolve(__dirname);

var matchConfig = yaml.safeLoad(fs.readFileSync(`${dir}/git_hub_match.yml`, 'utf8'));

function mathArray(elements, config){
  let newElements = [];

  elements.forEach(
    (element) => {
      let newElement = mathObject(element, config)

      newElements.push(newElement);
    }
  );

  return newElements;
}

function mathObject(element, config){
  let newElement = {};

  for (let key in element) {

    if (config[key]) {
      let value = element[key];
      let newKey = config[key];
      newElement[newKey] = value;
    }
  }

  return newElement;
}

export default function(label, element) {
  let config = matchConfig[label];

  if( Object.prototype.toString.call(element) === '[object Array]' ) {
    return mathArray(element, config);
  }else{
    return mathObject(element, config);
  }

}
