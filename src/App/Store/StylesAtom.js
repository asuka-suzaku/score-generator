import { atom } from "recoil";

//ジェネレーターの初期値 before initialization対策
export const defaultValues = {
  fileConfig: {
    file: [],
    choiceFile: "useUrl",
    matchTitle: "タイトル",
    killPoint: 0,
    rankPoint: "useRegularRankPoint",
    contentWidth: 1920,
    contentHight: 1080,
  },
  fonts: {
    fontFamily: "'Noto Sans JP', sans-serif",
    fontColor: "#000",
    fontSize: 18,
    useLanguage: "useJa",
  },
  decoration: {
    borderSize: 0,
    borderColor: "#000",
    bgImg: [],
  },
};

export const StylesAtom = atom({
  key: "StylesAtom",
  default: defaultValues,
  dangerouslyAllowMutability: true,
});

export const CsvAtom = atom({
  key: "CsvAtom",
  default: [],
});
