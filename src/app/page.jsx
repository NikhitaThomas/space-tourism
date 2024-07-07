import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col md:flex-row w-8/12 m-auto items-center gap-8 mt-24 md:mt-0"
      style={{ height: "calc(100vh - 130px)" }}
    >
      <div className="flex flex-col gap-6 md:basis-1/2">
        <div className="font-thin">SO, YOU WANT TO TRAVEL TO</div>
        <div className="text-8xl font-semibold">SPACE</div>
        <div className="font-thin">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
      <div className="md:basis-1/2 flex justify-end relative top-28">
        <button className="bg-white w-52 h-52 rounded-full text-gray-600">
          <Link href={"/destination"}>EXPLORE</Link>
        </button>
      </div>
    </div>
  );
}
