import { styled } from "..";

export const ContainerApp = styled('div',{
    maxWidth:"14.375rem",

    h1:{
        fontSize:'5.5rem',
        fontStyle:'normal',
        fontWeight:700,
        textAlign:'center',
        marginBottom:'1.5rem'
    },

     '&>img':{
         position:'absolute',
         bottom:"2rem",
         right:"2.5rem",
         objectFit:"cover",
         cursor:"pointer",
         
         //borderRadius:999,
         //backgroundColor:"red",
        }
})