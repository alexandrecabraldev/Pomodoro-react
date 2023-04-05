import { styled } from "..";
import play from "../../../public/play.png";
import pause from "../../../public/pause.png";
import watch from "../../../public/watch.png";
import stop from "../../../public/stop.png";
import Image from "next/image";
import { useState,useEffect } from "react";

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

interface PropsContainerPlayPause{
    onTime: (timer:number)=>void;
    onChangeTimer:()=>void;
}

export function ContainerPlayPause({onTime, onChangeTimer}:PropsContainerPlayPause){

    const [changePlay, setChangePlay] = useState(true);
    const [changeWatch, setChangeWatch] = useState(true);
    
    const [effectSuport, setEffectSuport] = useState(0);
    let minutsAmountSuport: number= 0;


    useEffect(()=>{
        setTimeout(()=>{

            if(!changePlay){
                onChangeTimer();
                console.log(effectSuport);
                setEffectSuport(state=>state+1);
            }            
            
        },1000);

    },[effectSuport]) 


    function handleClickPlay(){
        setChangePlay(state=>!state);

        if(changePlay){
            setChangeWatch(false);
            setEffectSuport(state=>state+1);
        }
    }

    function handleClickWatch(){

        if(changeWatch){

            while(minutsAmountSuport<=0 || minutsAmountSuport>60 || isNaN(minutsAmountSuport)){

                minutsAmountSuport= Number(prompt("Digite a quantidade de minutos"));

                if(minutsAmountSuport>60 || minutsAmountSuport<=0 || isNaN(minutsAmountSuport)){
                    alert("Número entre 1 e 60");
                }
            }
                
            onTime(minutsAmountSuport);
        }

        console.log(minutsAmountSuport);
        setChangeWatch(true);
        setChangePlay(true);
    }

    return(
        <ContainerButtons>
            {
                changePlay ? <Image src={play} alt='' onClick={handleClickPlay}/> : <Image src={pause} alt='' onClick={handleClickPlay}/>
            }

            {
                changeWatch ? <Image src={watch} alt='' onClick={handleClickWatch}/> : <Image src={stop} alt='' onClick={handleClickWatch}/>
            }

        </ContainerButtons>
    );
}