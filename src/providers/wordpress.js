export default function WordPress(options) {
  return {
    id: "wordpress",
    name: "WordPress.com",
    type: "oauth",

    scope: "auth",
    params: { grant_type: "authorization_code" },
    accessTokenUrl: "https://public-api.wordpress.com/oauth2/token",
    authorizationUrl:
      "https://public-api.wordpress.com/oauth2/authorize?response_type=code",
    profileUrl: "https://public-api.wordpress.com/rest/v1/me",
    profile(profile) {
      return {
        id: profile.ID,
        name: profile.display_name,
        email: profile.email,
        image: profile.avatar_URL,
      }
    },
    ...options,
  }
}
