import { ContainerApp } from "@/styles/pages/ContainerApp"
import { ContainerPlayPause } from "@/styles/pages/ContainerPlayPause"
import Image from "next/image"
import soundMute from "../../public/mute.png";
import { useState } from "react";

export default function Home() {
  
  const [minutsAmount, setMinutsAmount] = useState(30);
  const [firstSecondsAmount, setFirstSecondsAmount] = useState(0)
  const [secondsAmount, setSecondsAmount] = useState(0);
  const [resetSuport, setResetSuport] = useState(true);


  function Time(timer:number){
    setMinutsAmount(timer);

  }

  function reset(){
    setMinutsAmount(30);
    setFirstSecondsAmount(0);
    setSecondsAmount(0);
  }

  function changeTimer(){

    if(resetSuport){

      setFirstSecondsAmount(5);
      setSecondsAmount(9);
      setResetSuport(state=>!state);
      setMinutsAmount(state=>state-1);

    }else{
    
      if(secondsAmount>0){
        setSecondsAmount(state=>state-1);
        
      }else{
        setSecondsAmount(9);
        setFirstSecondsAmount(state=>state-1);

        if(firstSecondsAmount===0 && secondsAmount===0 && minutsAmount>0){
          setFirstSecondsAmount(5);
          setMinutsAmount(state=>state-1);

        }else if(firstSecondsAmount===0 && secondsAmount===0 && minutsAmount===0){
          //console.log("fim");
        }
      } 
    } 

  }

  return (
    <ContainerApp>

      <h1>{minutsAmount}:{firstSecondsAmount}{secondsAmount}</h1>

      <ContainerPlayPause onTime={Time} onChangeTimer={changeTimer} minutsAmount={minutsAmount} onReset={reset}/>

      <Image src={soundMute} alt=''/>

    </ContainerApp>
  )
}
