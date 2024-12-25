import Image from "next/image";

export default function Article({ title, image, url }: { title: string, image: string, url: string }) {
  return (
    <div className={"flex flex-col w-96 h-96 bg-white rounded-xl p-5 drop-shadow-xl justify-center hover:bg-gray-100 mx-4"} onClick={() => window.location.href = url}>
      <Image
          src={`/assets/article/${image}`}
          alt={title}
          width={1080}
          height={1080}
          className="relative top-0 left-0 z-0 w-full h-72 object-cover rounded-lg"
      />
        <h1 className={"font-bold text-2xl"}>{title}</h1>
    </div>
  )
}