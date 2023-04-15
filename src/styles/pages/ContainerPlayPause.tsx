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
    }

})

interface PropsContainerPlayPause{
    onSetTime: (timer:number)=>void;
    onReset:()=>void;
    onHandleClickPlayPause:()=>void;
    onHandleClickWatch:()=>void;
}

export function ContainerPlayPause({onSetTime, onReset, onHandleClickPlayPause, onHandleClickWatch}:PropsContainerPlayPause){


    const [isPlayEnable, setIsPlayEnable] = useState(false);
    const [isWatchPressed, setIsWatchPressed] = useState(false);
    
    let minutsAmountSuport: number= 0;
    

    function handleClickPlay(){

        setIsPlayEnable(state=>!state);

        setIsWatchPressed(true);

        onHandleClickPlayPause();
    }

    function handleClickWatchStop(){

        let ifWatchPressed = !isWatchPressed;
        
        if(ifWatchPressed){

            while(minutsAmountSuport<=0 || minutsAmountSuport>60 || isNaN(minutsAmountSuport)){

                minutsAmountSuport= Number(prompt("Digite a quantidade de minutos"));
    
                if(minutsAmountSuport>60 || minutsAmountSuport<=0 || isNaN(minutsAmountSuport)){
                    alert("Número entre 1 e 60");
                }
            }

            onSetTime(minutsAmountSuport);
        }else{
            onReset();
            onHandleClickPlayPause();
        }

        setIsWatchPressed(false);
        setIsPlayEnable(false);
        onHandleClickWatch();
    }

    return(
        <ContainerButtons>
            {
                isPlayEnable ? <Image src={pause} alt='' onClick={handleClickPlay}/> : <Image src={play} alt='' onClick={handleClickPlay}/>
            }

            {
                isWatchPressed ? <Image src={stop} alt='' onClick={handleClickWatchStop}/> : <Image src={watch} alt='' onClick={handleClickWatchStop}/>
            }

        </ContainerButtons>
    );
}