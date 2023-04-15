import { ContainerApp } from "@/styles/pages/ContainerApp"
import { ContainerPlayPause } from "@/styles/pages/ContainerPlayPause"
import Image from "next/image"
import soundMute from "../../public/mute.png";
import sound from "../../public/sound.png";
import { useState,useRef } from "react";
import Countdown,{zeroPad,CountdownRenderProps} from "react-countdown";


export default function Home() {

  const clockRef=useRef<Countdown | null>(null);
  const INITIAL_VALUE= 30 * 60000; //inicia em 30 min e multiplica por 60.000 miliseconds para pegar quantidade de minutos em segundos

  const [secondsAmount, setSecondsAmount] = useState(INITIAL_VALUE);
  const [ClickButtonSound,setClickButtonSound]=useState(false);


  function setTime(timer:number){

    setSecondsAmount(timer *60000);

  }

  function handleClickPlayPause(){

    if(clockRef.current?.isPaused() || clockRef.current?.isStopped()){     
      clockRef.current.start();
      return;
    }  

    clockRef.current?.pause();
  }

  function handleClickWatch(){
    clockRef.current?.stop();
  }

  function reset(){
    setSecondsAmount(30 * 60000);
    clockRef.current?.stop();
  }

  function render({minutes,seconds}:CountdownRenderProps){
    return (
      <h1>{zeroPad(minutes)}:{zeroPad(seconds)}</h1>
    );
  }

  function clickSoundButton(){
    setClickButtonSound(state=>!state);
  }

  return (
    <ContainerApp>

      {/* <h1>{String(minuts).padStart(2, "0")}:{String(seconds).padStart(2,"0")}</h1> */}
      <Countdown 
        ref={clockRef}
        date={Date.now() +secondsAmount}
        intervalDelay={1000}
        autoStart={false}
        renderer={render}   
      />

      <ContainerPlayPause onSetTime={setTime} onReset={reset} onHandleClickPlayPause={handleClickPlayPause} onHandleClickWatch={handleClickWatch}/>

      {ClickButtonSound ?<Image src={sound} alt='' onClick={clickSoundButton}/>: <Image src={soundMute} alt='' onClick={clickSoundButton}/>}

    </ContainerApp>
  )
}
