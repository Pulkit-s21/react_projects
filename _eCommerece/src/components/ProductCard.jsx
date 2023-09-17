/* eslint-disable react/prop-types */
export const ProductCard = ({ item }) => {
  return (
    <>
      {item.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-between shadow-xl p-6 rounded-lg gap-4 hover:scale-105 group transition-all cursor-pointer max-w-lg md:max-w-xl lg:max-w-2xl"
        >
          <img width={300} src={item.productImg} alt="Image" />
          <div className="">
            <h3 className="text-2xl">{item.title}</h3>
            <p className="text-xl group-hover:scale-150 transition-all">
              <span className="text-xl text-green-600">&#x20b9;</span>{" "}
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}
