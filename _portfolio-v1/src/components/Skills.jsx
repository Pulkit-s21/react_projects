export const Skills = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-center p-6">
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-blue-900">Skills</h1>
      <ol className="list-none flex flex-col justify-center items-center gap-12">
        <li>
          <h2 className="text-4xl md:text-6xl text-blue-900">FrontEnd</h2>
          <p className="text-xl md:text-2xl lg:text-4xl max-w-[30ch]">
            ReactJS, HTML, CSS, TailWindCSS, BootStrap
          </p>
        </li>
        <li>
          <h2 className="text-4xl md:text-6xl text-blue-900 max-w-[30ch]">BackEnd</h2>
          <p className="text-xl md:text-2xl lg:text-4xl">NodeJS, ExpressJS</p>
        </li>
        <li>
          <h2 className="text-4xl md:text-6xl text-blue-900 max-w-[30ch]">Languages</h2>
          <p className="text-xl md:text-2xl lg:text-4xl">JavaScript, Python</p>
        </li>
      </ol>
    </div>
  )
}
