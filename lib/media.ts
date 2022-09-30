import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
    let imageUrl = ""
    console.log("Media: ", media.attributes)

    if(Object.hasOwn(media, "attributes")){
        const { url } = media.attributes;
        imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    } else {
        const { url } = media;
        imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    }
    
    return imageUrl;
}