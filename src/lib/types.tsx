
// HOMEPAGE
export type DevIcon = {src: string, label: string}


// PROJECTS PAGE
export type Project = {
    link: string,
    imageSrc: string,
    label: string,
    text: string
}

// ABOUT PAGE
export type Card = {
    label: string,
    Icon: React.ElementType,
    text: string
}


// FOOTER
export type SocialIcon = {
    src: string, label: string, link: string
}