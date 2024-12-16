const ProjectCard = ({ name, img, live, github, desc, tags }) => {
  return (
    <div className="relative h-[500px] w-full group">
      {/* Top part */}
      <div className="flex h-1/2 flex-col gap-3 justify-center bg-black px-6">
        <h3 className="mb-2 text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm font-light text-slate-300">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => {
            return (
              <span className={`${tag.color} text-xs`} key={idx}>
                {tag.name}
              </span>
            )
          })}
        </div>
      </div>

      {/* Image */}
      <div
        className={`absolute inset-0 z-10 bg-slate-200 top-[0%] right-[0%] bg-cover bg-top group-hover:top-[50%] group-hover:right-[50%] transition-all duration-500`}
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Links */}
      <div className="flex flex-col gap-4 lg:gap-6 bg-white absolute bottom-0 right-0 h-1/2 w-1/2 justify-center items-center">
        {/* Live demo */}
        <a
          href={live}
          className="text-black transition-colors hover:text-indigo-500 cursor-pointer"
          target="_blank"
        >
          <div className="flex items-center">
            <span className="text-sm lg:text-base">Live Demo</span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </a>
        {/* Github code */}
        <a
          href={github}
          className="text-black transition-colors hover:text-indigo-500 cursor-pointer"
        >
          <div className="flex items-center">
            <span className="text-sm lg:text-base">Github</span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
