import { ContainerApp } from "@/styles/pages/ContainerApp"
import { ContainerPlayPause } from "@/styles/pages/ContainerPlayPause"
import Image from "next/image"
import soundMute from "../../public/mute.png"

export default function Home() {
  return (
    <ContainerApp>

      <h1>25:00</h1>
      
      <ContainerPlayPause/>

      <Image src={soundMute} alt=''/>
    </ContainerApp>
  )
}
