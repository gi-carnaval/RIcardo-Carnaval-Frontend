export function getStrapiURL(path = "") {
    return `${
      process.env.STRAPI_API || "http://localhost:1337"
    }${path}`;
  }