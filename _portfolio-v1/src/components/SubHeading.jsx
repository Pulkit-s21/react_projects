import { RoughNotation } from "react-rough-notation"

export const SubHeading = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-yellow-500">
        Hi there, My Name is{" "}
        <RoughNotation
          type="circle"
          color="white"
          order={1}
          className="font-Cabin block"
        >
          Pulkit Saxena
        </RoughNotation>
      </h1>
      <div className="text-lg md:text-xl lg:text-2xl max-w-lg lg:max-w-2xl tracking-wider leading-4">
        <RoughNotation
          RoughNotation
          type="box"
          strokeWidth={5}
          show={true}
          order={2}
          animate={true}
          animationDuration={1000}
          color="red"
          className="text-3xl md:text-5xl lg:text-7xl font-Cabin block"
        >
          Front-End Developer
        </RoughNotation>
        with the curiousity to explore and learn loads of new things and keep on
        progressing.
      </div>
    </div>
  )
}
