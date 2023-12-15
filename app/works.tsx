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

const Project =()=>{
  return (
    <div>
      
    </div>
  )
}

const Works = () => {
  return (
    <div className="container py-20">
      <h2 className="font-display text-xl font-semibold text-center">WORKS↓</h2>

      <div className="mt-8"> 
        <Project/>
      </div>
    </div>
  );
};

export default Works;
