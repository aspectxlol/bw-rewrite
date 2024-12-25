import Article from "@bw/components/Article";
import EmblaCarousel from "@bw/components/outside/EmblaCarousel";

export default function Articles() {
    const Slides = Array.from(Array(14).keys()).map((i) => <Article key={i} title={"4 Alasan mengapa kalian harus bersekolah di SMA Strada Bhakti Wiyata"} image={"1.png"} url={'/smelly'} />);

    return (
        <div className={"flex flex-row gap-10 overflow-hidden"}>
            <EmblaCarousel
                slides={Slides}
                options={{
                    align: 'start',
                }}
            />
        </div>
    );
}