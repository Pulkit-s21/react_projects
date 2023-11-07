export const Part2 = () => {
  const list = [
    { name: "Pulkit", age: 22 },
    { name: "Tushar", age: 24 },
    { name: "Vikas", age: 25 },
    { name: "Pranay", age: 27 },
    { name: "Amit", age: 33 },
  ]
  return (
    <>
      {list.map((person, idx) => (
        <ul key={idx}>
          <li>
            {person.name} {person.age}
          </li>
        </ul>
      ))}

      {list
        .filter((person) => person.age < 30)
        .map((filteredPerson, idx) => (
          <li key={idx}>
            {filteredPerson.name} {filteredPerson.age}
          </li>
        ))}
    </>
  )
}
