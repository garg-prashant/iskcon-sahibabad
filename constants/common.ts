import facebookLogo from "../assets/facebook.svg"
import twitterLogo from "../assets/twitter.svg"
import youtubeLogo from "../assets/youtube.svg"
import instaLogo from "../assets/insta.svg"
import linkedinLogo from "../assets/linkedin.svg"
import mapsLogo from "../assets/maps.svg"

export const baseUrl = 'http://135.181.80.202:9090/v1/';


export const navBarData = {
    navigations: [
        { cta: "Home", link: "/" },
        // { cta: "About", link: "/about" },
        // { cta: "Temple", link: "/temple" },
        // { cta: "Media", link: "/media" },
        // { cta: "Donate", link: "/donate" },
    ],
    socials: [
        { cta: "location", link: "#" },
        { cta: "facebook", link: "#" },
        { cta: "twitter", link: "#" },
        { cta: "youtube", link: "#" },
        { cta: "instagram", link: "#" },
        { cta: "linkedin", link: "#" },
    ]
}

export const ctaToLogo: any = {
    facebook: facebookLogo,
    location: mapsLogo,
    twitter: twitterLogo,
    youtube: youtubeLogo,
    instagram: instaLogo,
    linkedin: linkedinLogo,
}
