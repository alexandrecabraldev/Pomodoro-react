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
    onTime: (timer:number)=>void;
    onReset:()=>void;
    handleClickPlayPause:()=>void;
}

export function ContainerPlayPause({onTime, onReset, handleClickPlayPause}:PropsContainerPlayPause){
    

    const [isPlayEnable, setIsPlayEnable] = useState(false);
    const [isWatchPressed, setIsWatchPressed] = useState(false);
    
    let minutsAmountSuport: number= 0;
    

    function handleClickPlay(){

        let ifPlayEnable=false;

        setIsPlayEnable(state=>!state);
        ifPlayEnable= !isPlayEnable;
        
        handleClickPlayPause();

        if(ifPlayEnable){
            setIsWatchPressed(true);
        }
    }

    function handleClickWatch(){

        if(!isWatchPressed){

            while(minutsAmountSuport<=0 || minutsAmountSuport>60 || isNaN(minutsAmountSuport)){

                minutsAmountSuport= Number(prompt("Digite a quantidade de minutos"));
    
                if(minutsAmountSuport>60 || minutsAmountSuport<=0 || isNaN(minutsAmountSuport)){
                    alert("Número entre 1 e 60");
                }
            }

            onTime(minutsAmountSuport);
        }else{
            onReset();
            setIsWatchPressed(true);
            handleClickPlayPause();
        }

        setIsWatchPressed(false);
        setIsPlayEnable(false);
        handleClickPlayPause();
    }

    return(
        <ContainerButtons>
            {
                isPlayEnable ? <Image src={pause} alt='' onClick={handleClickPlay}/> : <Image src={play} alt='' onClick={handleClickPlay}/>
            }

            {
                isWatchPressed ? <Image src={stop} alt='' onClick={handleClickWatch}/> : <Image src={watch} alt='' onClick={handleClickWatch}/>
            }

        </ContainerButtons>
    );
}