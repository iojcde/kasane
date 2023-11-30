import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen container h-full">
      <div className="text-8xl py-48 ">
        <h1 className="font-display font-semibold tracking-[-0.02em] ">
          Interdisciplinary{" "}
          <span className="  inline-flex items-center w-min h-min text-ring text-[5rem] tracking-normal rounded-full px-8 pt-2 pb-4">
            design
          </span>{" "}
          +
        </h1>
        <h1 className="font-display font-semibold tracking-[-0.02em] ">
          <span className="font-mono"> development </span>studio.
        </h1>

        <div className="bg-gray-3  max-w-fit border rounded-full flex gap-3 text-sm items-center px-4 py-1 mt-8 text-gray-11">
          <div className="dot bg-green-500 w-2 h-2 rounded-full" /> Available
          for new projects
        </div>
      </div>
    </main>
  );
}
