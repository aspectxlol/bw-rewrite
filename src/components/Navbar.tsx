import Image from "next/image";
import {SVGProps} from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-row w-full p-2 bg-PrimaryNav text-white justify-between top-0 z-10 items-center">
        <div className={"flex flex-col items-center justify-center h-10 block md:hidden"}>
            <HamburgerIcon className={"w-10 h-10"}/>
        </div>
      <div id="links" className="p-5 hidden md:block xl:text-3xl">
        <ol className="flex flex-row font-bold gap-2 xl:gap-5">
          <li><a href="/prestasi">Prestasi</a></li>
          <li><a href="/Pendaftaran">Pendaftaran</a></li>
          <li><a href="/Galeri">Galeri</a></li>
          <li><a href="/Event">Event</a></li>
        </ol>
      </div>
      <Image
        src="/assets/Logo-Strada-small-128.png"
        alt="Logo Strada"
        width="128"
        height="128"
        className=""
        priority
      />
    </nav>
  );
}

function  HamburgerIcon(svgProps: SVGProps<SVGSVGElement> ) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" {...svgProps}>
          <path fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
  );
}