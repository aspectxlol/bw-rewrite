import Stat from "@bw/components/Stat";

export default function Test() {
  return (
    <div className={"flex flex-row gap-10 p-10"}>
        <Stat title={"Pengabdian"} metric={"Tahun"} value={"99"} />
        <Stat title={"Provinsi"} metric={"Wilayah"} value={"3"} />
        <Stat title={"Sekolah"} metric={"Unit"} value={"74"} />
        <Stat title={"Siswa"} metric={"Binaan"} value={"2377"} />
    </div>
  );
}