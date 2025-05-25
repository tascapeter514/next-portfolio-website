
// HOMEPAGE
export type DevIcon = {src: string, label: string}


// MOBILE NAVBAR
export type MobileNavState = {
    open: boolean,
    isExiting: boolean
}

export type MobileNavAction = {type: 'OPEN_MOBILE_NAV', payload: boolean} | {type: 'CLOSING_MOBILE_NAV', payload: boolean} | {type: 'CLOSED_MOBILE_NAV', payload: boolean }


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