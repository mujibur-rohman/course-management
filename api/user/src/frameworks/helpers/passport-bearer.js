const passport = require("passport");
const BearerStrategy = require("passport-http-bearer");
const loginDetail = require("../database/postgres/repositories/login-detail-repository");

const tokenFromcookie = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["token"];
  }
  return token;
};

passport.use(
  new BearerStrategy((token, done) => {
    try {
      console.log("token", token);
      loginDetail.findOne({ token: token }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        return done(null, user, { scope: "all" });
      });
    } catch (err) {
      console.log(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});
