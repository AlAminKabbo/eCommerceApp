import { colors, typhography } from "../theme";
const BASE ={
     fontFamily: typhography.primary,
     fontSize: 15,
     color: colors.black,
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
        fontSize: 56
    },
    h2:{
        ...BOLD,
        fontSize: 40
    },
    h3:{
        ...BASE_BOLD,
        fontSize: 36
    },
    h4:{
        ...BASE_BOLD,
        fontSize: 28
    },
    h5:{
        ...BASE_BOLD,
        fontSize: 24
    },
    h6:{    
        ...BASE_BOLD,
        fontSize: 18,
    },
    overLine:{
        fontFamily: typhography.regular,
        fontSize: 14,
    },
    subtitle:{
        ...BASE,
        fontSize: 13,
    },
    title:{
        ...BASE,
        fontSize: 14,
    },
    
}