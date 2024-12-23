export default function Stat({ title, metric, value }: { title: string, metric: string, value: string }) {
  return (
    <div className={"flex flex-row items-center"}>
        <div className={"flex flex-col"}>
            <div className={"bg-gradient-to-t from-blue-900 to-blue-400 rounded-xl w-20 h-20 flex items-center justify-center"}>
                <div className={"font-bold text-white text-2xl"}>{value}</div>
            </div>
            <div className={"font-bold text-center relative -top-3 bg-gradient-to-t from-gray-300 to-white rounded-3xl"}>
                <h1>{metric}</h1>
            </div>
        </div>
        <div className={"text-2xl font-bold relative -top-1 ml-5"}>{title}</div>
    </div>
  )
}