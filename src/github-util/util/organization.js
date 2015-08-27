'use strict';

import Octokat from 'octokat';
import util from '../github_elements_util';
import checkOcto from './checkOcto';

export default {

  userOrgs: function(userName, userLogged) {

    //TODO: delete when passport deserializeUser work
    checkOcto(userLogged);

    return userLogged.octo.user.orgs.fetch()
      .then((orgs) => util('organization', orgs));
  },

  org: function(orgDescription, userLogged) {

    //TODO: delete when passport deserializeUser work
    checkOcto(userLogged);

    return userLogged.octo.orgs(orgDescription).teams.fetch()
      .then((teams) =>  util('team', teams));
  }
};
