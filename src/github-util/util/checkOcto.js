//TODO: delete when passport deserializeUser work
import Octokat from 'octokat';

export default  function (userLogged) {
  if (!userLogged.octo) {
    userLogged.octo = new Octokat({
      token: userLogged.token
    });
  }
};
