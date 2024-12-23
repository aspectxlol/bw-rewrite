import Article from "@bw/components/Article";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'

export default function Test() {
  return (
    <div className={"flex flex-row gap-10 p-10"}>
        <Carousel
            showDots={true}
            swipeable={true}
            draggable={true}
            arrows={false}
            partialVisbile={true}
            responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 2,
                        partialVisibilityGutter: 70
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
            containerClass={"w-[80%] p-4"}
        >
            {Array(10).fill(0).map((i) =>
                <Article key={i} title={"4 Alasan mengapa kalian harus bersekolah di SMA Strada Bhakti Wiyata"} image={"1.png"} url={'/smelly'} />
            )}
        </Carousel>
    </div>
  );
}