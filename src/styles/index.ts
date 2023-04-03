import { createStitches } from "@stitches/react";

export const {
    config, 
    styled, 
    css, 
    getCssText,
    globalCss,
    keyframes,
    theme,
    createTheme

} = createStitches({
    theme:{
        colors:{
            white:"#FFF",
            backgroundApp: "#121214",
            playPause: "#42D3FF",
            backgroundPlay: 'rgba(66, 211, 255, 0.13)',
        },
    }
});