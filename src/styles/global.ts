import { globalCss } from ".";

export const globalStyles = globalCss({
    '*':{
        margin:0,
        padding:0,
        boxSizing:'border-box',
    },

    body:{
        backgroundColor: "$backgroundApp",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"100vh",
        fontFamily:"Roboto, sans-serif",
        position:"relative",
    },

    'body, span,p,h1':{
        color:'$white',
    }
})