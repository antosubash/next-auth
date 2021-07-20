export default function Osso(options) {
  return {
    id: "osso",
    name: "SAML SSO",
    type: "oauth",

    params: { grant_type: "authorization_code" },
    accessTokenUrl: `https://${options.domain}/oauth/token`,
    authorizationUrl: `https://${options.domain}/oauth/authorize?response_type=code`,
    profileUrl: `https://${options.domain}/oauth/me`,
    profile(profile) {
      return {
        id: profile.id,
        name: profile.name || profile.email,
        email: profile.email,
      }
    },
    ...options,
  }
}
