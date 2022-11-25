module.exports = (router, app, authenticator) => {
  router.post("/register", authenticator.registerUser);
  // calling Experss oauth.granth() to make sure this user is logged in properly
  router.post("/login", app.oauth.grant(), authenticator.login); 

  return router;
};