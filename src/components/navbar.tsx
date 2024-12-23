import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex flex-row w-full p-2 bg-PrimaryNav text-white justify-between sticky top-0 z-40">
      <div id="links" className="p-5">
        <ol className="flex flex-row font-bold gap-2">
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