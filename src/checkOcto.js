'use strict';

import Octokat from 'octokat';

//TODO: delete when passport deserializeUser work
export default  function (userLogged) {
  if (!userLogged.octo) {
    userLogged.octo = new Octokat({
      token: userLogged.token
    });
  }
};
