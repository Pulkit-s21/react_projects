export const SubHeading = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-yellow-500">
        Hi there, My Name is{" "}
        <span className="font-Cabin block">Pulkit Saxena</span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl max-w-lg lg:max-w-2xl tracking-wider">
        <span className="text-3xl md:text-5xl lg:text-7xl font-Cabin block">
          Front-End Developer
        </span>{" "}
        with the curiousity to explore and learn loads of new things and keep on
        progressing.
      </p>
    </div>
  )
}
