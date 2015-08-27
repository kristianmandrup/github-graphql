function user(name, password) {
  return {username: name, password: password};
}

export default {
  valid: user('freddyucv', 'leones2009'),
  invalid: user('johndoe', 'secret')
};
