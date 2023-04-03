import { styled } from "..";
import play from "../../../public/play.png";
import pause from "../../../public/pause.png";
import watch from "../../../public/watch.png";
import stop from "../../../public/stop.png";
import Image from "next/image";
import { useState } from "react";

const ContainerButtons = styled('div',{
    width:"100%",
    backgroundColor:"$backgroundPlay",
    borderRadius: '100px',
    padding:"1.5rem 2.5rem",
    display:"flex",
    gap:"2rem",
    
    img:{
        cursor:"pointer",
        objectFit:"cover",
        borderRadius:999,
        
        //backgroundColor:"red",
    }

})
export function ContainerPlayPause(){

    const [changePlay, setChangePlay] = useState(true);
    const [changeWatch, setChangeWatch] = useState(true);

    function handleClickPlay(){
        setChangePlay(state=>!state);

        if(changePlay){
            setChangeWatch(false);
        }
    }

    function handleClickWatch(){
        setChangeWatch(true);
        setChangePlay(true);
    }

    return(
        <ContainerButtons>
            {
                changePlay ? <Image src={play} alt='' onClick={handleClickPlay}/> : <Image src={pause} alt='' onClick={handleClickPlay}/>
            }
            
            {
                changeWatch? <Image src={watch} alt=''/> : <Image src={stop} alt='' onClick={handleClickWatch}/>
            }
        </ContainerButtons>
    );
}