import Image from 'next/image'

export default function Home() {
  return (
    <div
      className={``}
    >
      <div id={'hero'} className={"h-1/4 relative"}>
        <Image
          src="/assets/Hero-image.jpg"
          alt="Hero Image"
          width={1920}
          height={500}
          className="w-full relative top-0 left-0 z-0"
        />
        <div className={"top-0 bg-gradient-to-r from-blue-800 absolute left-0 z-10 p-14 pr-48 w-2/3 h-full"}>
          <div className='left-0 w-full h-full text-white relative top-10'>
            <h1 className={"text-7xl font-bold"}>Temukan Masa Depanmu di SMA Strada Bhakti Wiyata</h1>
            <p className={"text-3xl mt-10"}>SMA Strada Bhakti Wiyata adalah kesempatan emas untuk mendapatkan wawasan berharga sebelum menentukan pilihan Pendidikan impianmu. Jelajahi program unggulan kami dan diskusikan langsung dengan guru serta siswa tentang mengapa Strada Bhakti Wiyata adalah tempat terbaik untuk memulai langkah menuju masa depan yang gemilang.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
