'use strict';

import Octokat from 'octokat';
import util from '../github_elements_util';
import checkOcto from './checkOcto';

export default {

  userOrgs: function(userName, userLogged) {

    //TODO: delete when passport deserializeUser work
    checkOcto(userLogged);

    return userLogged.octo.user.orgs.fetch()
      .then((orgs) => orgs);
  },

  org: function(orgDescription, userLogged) {

    //TODO: delete when passport deserializeUser work
    checkOcto(userLogged);

    return userLogged.octo.orgs(orgDescription).fetch()
      .then((org) =>  {console.log('AAAAAAAAAAAAAAA');return org});
  }
};
