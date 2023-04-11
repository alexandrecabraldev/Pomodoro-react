import { ContainerApp } from "@/styles/pages/ContainerApp"
import { ContainerPlayPause } from "@/styles/pages/ContainerPlayPause"
import Image from "next/image"
import soundMute from "../../public/mute.png";
import { useState } from "react";
import Countdown,{zeroPad,CountdownRenderProps} from "react-countdown";
import { useRef,MutableRefObject } from "react";


export default function Home() {

  const clockRef=useRef<Countdown | null>(null);
  //refatorando todo o app baseado em segundos

  const INITIAL_VALUE= 1 * 60000; //inicia em 30 min e multiplica por 60.000 miliseconds para pegar quantidade de minutos

  const [secondsAmount, setSecondsAmount] = useState(INITIAL_VALUE);

  // const minuts = Math.floor(secondsAmount/60);
  // const seconds = secondsAmount % 60;

  function Time(timer:number){
    setSecondsAmount(timer *60000);
  }

  function handleClickPlayPause(){
    
    if(clockRef.current?.isStopped()){     
      clockRef.current.start();
      return;
    }

    if(clockRef.current?.isPaused()){
      clockRef.current.start();
      return;
    }
    clockRef.current?.pause();

  }

  function reset(){
    setSecondsAmount(30 * INITIAL_VALUE);
  }

  function render({minutes,seconds}:CountdownRenderProps){
    return (
      <h1>{zeroPad(minutes)}:{zeroPad(seconds)}</h1>
    );
  }

  return (
    <ContainerApp>

      {/* <h1>{String(minuts).padStart(2, "0")}:{String(seconds).padStart(2,"0")}</h1> */}
      <Countdown 
        date={Date.now() +secondsAmount}
        intervalDelay={1000}
        autoStart={false}
        ref={clockRef}
        renderer={render}
      />

      <ContainerPlayPause onTime={Time} onReset={reset} handleClickPlayPause={handleClickPlayPause}/>

      <Image src={soundMute} alt=''/>

    </ContainerApp>
  )
}
