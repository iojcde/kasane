import Image from "next/image";
const ProjectDetails = () => {
  return (
    <div className="grid grid-cols-[1.4fr_1fr] gap-12">
      {" "}
      <img
        data-scroll
        data-scroll-speed=".2"
        className="rounded"
        src="https://io.jcde.xyz/images/screenshot/deverse.png"
      />
      <div className="py-8">
        <h3 className="text-3xl font-bold font-display">Devbench</h3>
        <div className="mt-4">
          <p className="text-lg font-bold">Year</p>
          <p className="text-gray-11">2023</p>

          <p className="text-lg font-bold mt-4">Role</p>
          <ul className="text-gray-11">
            <li>Design</li>
            <li>Direction</li>
            <li>Development</li>
          </ul>
          <p className="text-lg font-bold mt-4">Stack</p>
          <ul className="text-gray-11">
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>React</li>
          </ul>
          <p className="text-lg font-semibold mt-4">Link</p>
          <a
            className="text-lg hover:text-red-500 underline"
            href="https://devbench.kr"
            target="_blank"
          >
            Visit ↗
          </a>
        </div>
      </div>
    </div>
  );
};

const Project = ({
  img,
  name,
  desc,
  type,
}: {
  img: string;
  name: string;
  desc: string;
  type: string;
}) => {
  return (
    <div className="relative">
      <Image
        alt=""
        className="rounded-lg"
        src={img}
        width={1000}
        height={500}
      />

      <div className="text-2xl mt-4 font-semibold font-display">
        {name}{" "}
        <span className="text-gray-11 font-normal text-lg">- {type}</span>
      </div>
      <div className="text-gray-11 mt-1">{desc}</div>
    </div>
  );
};

const Works = () => {
  return (
    <div className="container py-32">
      <h2 className="font-display text-3xl font-semibold text-center">
        RECENT WORKS ↓
      </h2>

      <div className="mt-8 grid sm:grid-cols-2 gap-8">
        <Project
          name="Devbench"
          desc="Developer forum"
          type="Website"
          img={"/devbench.png"}
        />{" "}
        <Project
          name="Vignette"
          type="Website"
          desc="Open source Vtuber software"
          img={"https://io.jcde.xyz/images/screenshot/vignette.png"}
        />
      </div>
    </div>
  );
};

export default Works;
