import { useRecoilState } from "recoil";
import { DemoAtom, DemoDataAtom } from "../../../Store/StylesAtom";
import { INPUT_STYLE } from "../../Generator/Elements/Setting";
import { GetIrregularPointValue } from "../../Generator/Function/GetIrregularPointValue";
import Demo from "./Demo";

export function DemoCreateInput() {
  const [DemoStyle, setDemoStyle] = useRecoilState(DemoAtom);
  const [DemoData, setDemoData] = useRecoilState(DemoDataAtom);
  const count = DemoStyle.fileConfig?.howLong;
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
          onClick={() => GetIrregularPointValue(DemoStyle, setDemoData)}
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
