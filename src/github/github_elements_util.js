'use strict';

import yaml from 'js-yaml';
import fs   from 'fs';
import path from 'path';

var dir = path.resolve(__dirname);

var matchConfig = yaml.safeLoad(fs.readFileSync(`${dir}/git_hub_match.yml`, 'utf8'));

export default function(label, elements) {
  let config = matchConfig[label];
  let newElements = [];

  elements.forEach(
    (element) => {
      let newElement = {};

      for (let key in element) {

        if (config[key]) {
          let value = element[key];
          let newKey = config[key];
          newElement[newKey] = value;
        }
      }

      newElements.push(newElement);
    }
  );

  return newElements;
}
