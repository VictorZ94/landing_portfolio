import Link from "next/link";
import MotionTransition from "./transition-component"
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition position="bottom" className="z-40 w-full bg-no-repeat bg-cover">
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Victor <span className="text-secondary">Zuluaga</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({logo, src, id}) => (
              <Link key={id} href={src} target="_blank" className="transition-all duration-300 hover:text-secondary">
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  )
}

export default Header;