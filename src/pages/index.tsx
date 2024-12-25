import Image from 'next/image'
import Stat from "@bw/components/Stat";
import Articles from "@bw/components/Articles";
import '@bw/styles/embla.css'
import '@bw/styles/base.css'

export default function Home() {
  return (
    <div
      className={``}
    >
      <section id={'hero'} className={"h-1/4 relative"}>
        <Image
          src="/assets/Hero-image.jpg"
          alt="Hero Image"
          width={1920}
          height={500}
          className="w-full relative top-0 left-0 z-0"
        />
        <div className={"top-0 bg-gradient-to-r from-blue-800 absolute left-0 z-10 p-2 px-5 w-2/3 xl:w-3/5 h-full"}>
          <div className='left-0 w-full h-full text-white relative top-10'>
            <h1 className={"text-2xl font-bold md:text-5xl xl:text-7xl"}>Temukan Masa Depanmu di SMA Strada Bhakti Wiyata</h1>
            <p className={"hidden sm:block text-lg sm:mt-10 md:text-xl lg:text-3xl "}>SMA Strada Bhakti Wiyata adalah kesempatan emas untuk mendapatkan wawasan berharga sebelum menentukan pilihan Pendidikan impianmu. Jelajahi program unggulan kami dan diskusikan langsung dengan guru serta siswa tentang mengapa Strada Bhakti Wiyata adalah tempat terbaik untuk memulai langkah menuju masa depan yang gemilang.</p>
          </div>
        </div>
      </section>
      <section id={'stats'} className={"h-1/4 relative shadow-xl"}>
        <div className={"flex-row gap-10 p-10 justify-center hidden lg:flex"}>
          <Stat title={"Pengabdian"} metric={"Tahun"} value={"99"}/>
          <Stat title={"Provinsi"} metric={"Wilayah"} value={"3"}/>
          <Stat title={"Sekolah"} metric={"Unit"} value={"74"}/>
          <Stat title={"Binaan"} metric={"Siswa"} value={"2377"}/>
        </div>
        <div className={"gap-10 p-10 justify-center grid lg:hidden grid-cols-2"}>
          <Stat title={"Pengabdian"} metric={"Tahun"} value={"99"}/>
          <Stat title={"Provinsi"} metric={"Wilayah"} value={"3"}/>
          <Stat title={"Sekolah"} metric={"Unit"} value={"74"}/>
          <Stat title={"Binaan"} metric={"Siswa"} value={"2377"}/>
        </div>
      </section>
      <section id={'article'} className={"h-1/4 relative flex flex-col p-10"}>
        <h1 className={"font-bold text-5xl"}>Berita Terbaru</h1>
        <div className={"w-full justify-center items-center"}>
          <Articles/>
        </div>
      </section>


    </div>
  );
}