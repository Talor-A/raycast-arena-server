import OAuth2Strategy from "passport-oauth2";
import appConfig from "../appConfig";

const strategy = new OAuth2Strategy(
  appConfig.arena,
  (accessToken, refreshToken, profile, done) => {
    return done(null, { accessToken });
  }
);
strategy.name = "arena";

export default strategy;
