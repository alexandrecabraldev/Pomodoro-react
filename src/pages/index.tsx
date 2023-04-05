import { ContainerApp } from "@/styles/pages/ContainerApp"
import { ContainerPlayPause } from "@/styles/pages/ContainerPlayPause"
import Image from "next/image"
import soundMute from "../../public/mute.png";
import { useState,useEffect } from "react";

export default function Home() {
  
  const [minutsAmount, setMinutsAmount] = useState(30);
  const [firstSecondsAmount, setFirstSecondsAmount] = useState(0)
  const [secondsAmount, setSecondsAmount] = useState(0);
  const [resetSuport, setResetSuport] = useState(true);

  useEffect(()=>{
    
  },[]);

  function Time(timer:number){
    setMinutsAmount(timer);

  }

  function changeTimer(){

    if(resetSuport){
      setFirstSecondsAmount(6);
      setResetSuport(state=>!state);
      setMinutsAmount(state=>state-1);
    }
    
    if(secondsAmount>0){
      setSecondsAmount(state=>state-1);
      
    }else{
      setSecondsAmount(9);
      setFirstSecondsAmount(state=>state-1);
      
      if(firstSecondsAmount<0){
        setFirstSecondsAmount(5);
      }
    }  

  }

  return (
    <ContainerApp>

      <h1>{minutsAmount}:{firstSecondsAmount}{secondsAmount}</h1>

      <ContainerPlayPause onTime={Time} onChangeTimer={changeTimer}/>

      <Image src={soundMute} alt=''/>

    </ContainerApp>
  )
}
