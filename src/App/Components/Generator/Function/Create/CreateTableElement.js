export default function CreateTableElement({ data }) {
  const amount = data.length;
  const temporaryArray = [];
  for (let i = 0; i < amount; i++) {
    temporaryArray.push(i.toString());
  }

  return (
    <>
      <table>
        <tbody>
          {temporaryArray.map((index) => (
            <tr
              id={`line-${Number(index) + 1}`}
              key={`line-${Number(index) + 1}`}
            >
              {data[index].map((elem, elemIndex) => (
                <td
                  id={`${Number(index) + 1}-${elemIndex + 1}`}
                  key={`${index + 1}-${elemIndex + 1}`}
                >
                  {elem}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p id="mark">GENERATED BY SCORE GENERATOR</p>
    </>
  );
}