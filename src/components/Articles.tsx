import Carousel from "react-multi-carousel";
import Article from "@bw/components/Article";

export default function Articles() {
    return (
        <div className={"flex flex-row gap-10"}>
            <Carousel
                showDots={true}
                swipeable={true}
                draggable={true}
                arrows={false}
                // partialVisible={true}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        // partialVisibilityGutter: 70
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 2,
                        // partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1,
                        // partialVisibilityGutter: 30
                    }
                }}
                renderDotsOutside={true}
                customDot={<CustomDot onMove={function(): void {
                    throw new Error("Function not implemented.");
                } } index={0} onClick={function(): void {
                    throw new Error("Function not implemented.");
                } } active={false} />}
                containerClass={"w-full p-4"}
            >
                {Array(10).fill(0).map((i) =>
                    <Article key={i} title={"4 Alasan mengapa kalian harus bersekolah di SMA Strada Bhakti Wiyata"} image={"1.png"} url={'/smelly'} />
                )}
            </Carousel>
        </div>
    );
}

const CustomDot = ({onClick, active }: { onMove: () => void, index: number, onClick: () => void, active: boolean }) => {
    return (
        <div
            className={`${active ? "bg-blue-500 " : ""} w-10 h-2 mx-2 rounded-full border-2 border-blue-500 inline-block shadow-xl transition-all duration-200 ease-in-out`}
            onClick={() => onClick()}
        >
        </div>
    );
};