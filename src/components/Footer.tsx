export default function Footer() {
  return (
    <footer className={"bg-gray-300"}>
        <div className={"flex flex-row gap-20 p-10"}>
            <div className={"flex flex-col"}>
                <h1 className={"font-bold text-2xl"}>Sekolah Strada</h1>
                <p>Jl. Gunung Sahari Raya No. 88, Jakarta Pusat 10610</p>
                <div>
                  <p>Tel. (021)-4204821; 4256572;</p>
                  <p>4269519 / Fax. (021)-4258809</p>
                </div>
            </div>
            <div>
                <h1 className={"font-bold text-2xl"}>Web Team</h1>
                <ul className={"flex flex-col list-disc"}>
                    <li>Ester Rouli (Coordinator)</li>
                    <li>Louie Hansen (Developer)</li>
                    <li>Raymond Alexander (Designer, Developer)</li>
                    <li>Dustin Alexander (Designer)</li>
                    <li>Jeremia (Photographer)</li>
                </ul>
            </div>
            <div>
                <h1 className={"font-bold text-2xl"}>Special Thanks</h1>
                <ul className={"flex flex-col list-disc"}>
                    <li>God, the Creator</li>
                    <li>The Queen, May God bless her soul</li>
                    <li>The Strada Association</li>
                    <li>Strada Bhakti Wiyata SHS</li>
                    <li>Nickei Fortuno Santoso</li>
                </ul>
            </div>
        </div>
        <div className={"flex flex-col w-full bg-black text-white font-bold p-5"}>
          (c) 2024, Coding SMA Strada BW
      </div>
    </footer>
  );
}