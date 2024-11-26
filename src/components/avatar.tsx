import Image from "next/image"
import MotionTransition from "./transition-component"

const Avatar = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block">
      <Image src="/avatar-1.png" width={400} height={400} alt="Avatar" className="w-full h-full"></Image>
    </MotionTransition>
  )
}

export  default Avatar;