import { MobileNavState, MobileNavAction } from "@/lib/types";



function mobileNavReducer(state: MobileNavState, action: MobileNavAction) {
    const {type, payload } = action;
    switch(type) {
        case 'OPEN_MOBILE_NAV':
            return {...state, open: payload};
        case 'CLOSING_MOBILE_NAV':
            return {...state, isExiting: payload}
        case 'CLOSED_MOBILE_NAV':
            return {...state, isExiting: payload, open: false}

            
        default: 
            return state;

    }

}

export default mobileNavReducer