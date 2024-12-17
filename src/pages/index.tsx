import Image from 'next/image'

export default function Home() {
  return (
    <div
      className={``}
    >
      <Image
        src="/assets/Hero-Image.jpg"
        alt="Hero Image"
        width={1920}
        height={500}
        className="w-full"
      />
    </div>
  );
}
