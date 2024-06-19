import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { DataAtom, StylesAtom } from "../../../../Store/StylesAtom";
import { INPUT_STYLE } from "../../Elements/Setting";
import { GetIrregularPointValue } from "../GetIrregularPointValue";

export function CreateInput() {
  const [styles, setStyles] = useRecoilState(StylesAtom);
  const [data, setData] = useRecoilState(DataAtom);
  const count = styles.fileConfig?.howLong;
  const ary = [];
  for (let i = 0; i < count; i++) {
    let push = i.toString();
    ary.push(push);
  }
  return (
    <>
      {ary.map((index) => (
        <InputIrregularArea idCount={index} key={index} count={index} />
      ))}
      {ary[0] ? (
        <button
          type="button"
          onClick={() => GetIrregularPointValue(styles, setData)}
        >
          確定
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export function InputIrregularArea({ count, idCount }) {
  return (
    <>
      <INPUT_STYLE>
        <label htmlFor="irregularPoint">{Number(count) + 1}位</label>
        <input
          type="number"
          name="irregularPoint"
          id={`irregularPoint-${Number(idCount) + 1}`}
          placeholder="0"
          defaultValue={0}
        />
      </INPUT_STYLE>
    </>
  );
}
