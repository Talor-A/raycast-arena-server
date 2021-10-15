import { StrategyOptions as ArenaOptions } from "passport-oauth2";
import invariant from "tiny-invariant";

export interface AppConfig {
  isDevelopment: boolean;
  hostingURL: string;
  arena: ArenaOptions;
}

const getEnvVar = (name: string): string => {
  const value = process.env[name];
  invariant(value, `Missing environment variable ${name}`);
  return value;
};

const getOAuthUrls: (hostName: string, app: string) => { callbackURL: string } =
  (hostName: string, app: string) => ({
    // Alternatively, use `[app].ts` filenames for paramaterized urls
    callbackURL: `${hostName}/api/auth/callback/${app}`,
  });

const isDevelopment = process.env.NODE_ENV !== "production";
const hostingURL = process.env.HOSTING_URL || "http://localhost:3000";

const appConfig: AppConfig = {
  isDevelopment,
  hostingURL,

  arena: {
    authorizationURL: "https://dev.are.na/oauth/authorize",
    tokenURL: "https://dev.are.na/oauth/token",
    clientID: getEnvVar("ARENA_APP_ID"),
    clientSecret: getEnvVar("ARENA_APP_SECRET"),
    ...getOAuthUrls(hostingURL, "arena"),
  },
};

export default appConfig;
