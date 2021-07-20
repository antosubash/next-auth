export default function Facebook(options) {
  return {
    id: "facebook",
    name: "Facebook",
    type: "oauth",

    scope: "email",
    accessTokenUrl: "https://graph.facebook.com/oauth/access_token",
    authorizationUrl:
      "https://www.facebook.com/v7.0/dialog/oauth?response_type=code",
    profileUrl: "https://graph.facebook.com/me?fields=email,name,picture",
    profile(profile) {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        image: profile.picture.data.url,
      }
    },
    ...options,
  }
}
