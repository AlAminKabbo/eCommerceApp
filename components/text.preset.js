import { colors, typhography } from "../theme";
const BASE ={
     fontFamily: typhography.primary,
     fontSize: 14,
     color: colors.white,
}
const BASE_BOLD ={
    fontFamily: typhography.primaryBold,
    color: colors.white
}
const BOLD ={
    fontFamily: typhography.bold,
    color: colors.white
}
export const presets = {
    default: BASE,
    bold: BOLD,
    h1:{
        ...BOLD,
        fontSize: 32
    },
    h2:{
        ...BOLD,
        fontSize: 28
    },
    h3:{
        ...BASE_BOLD,
        fontSize: 24
    },
    h4:{
        ...BASE_BOLD,
        fontSize: 13
    },
    small:{
        ...BASE,
        fontSize: 11.5
    }
    
}