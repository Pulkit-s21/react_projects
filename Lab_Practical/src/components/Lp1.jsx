export const Lp1 = () => {
  const list = [
    { id: 1, status: "Active" },
    { id: 2, status: "InActive" },
    { id: 3, status: "InActive" },
    { id: 4, status: "Active" },
  ]
  return (
    <>
      {list.map((item, idx) => (
        <ul key={idx}>
          {item.status == "Active" ? (
            <button
              onClick={() => alert(item.status)}
              className="text-green-500"
            >
              {item.status}
            </button>
          ) : (
            <button onClick={() => alert(item.status)} className="text-red-500">
              {item.status}
            </button>
          )}
        </ul>
      ))}
    </>
  )
}
