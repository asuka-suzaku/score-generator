import { atom } from "recoil";

//ジェネレーターの初期値 before initialization対策
export const defaultValues = {
  fileConfig: {
    url: "",
    file: [],
    choiceFile: "useFile",
    matchTitle: "タイトル",
    killPoint: 1,
    howLong: 0,
    regularRankPoint: 1,
    irregularPoint: [],
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

//settingからとった情報
export const StylesAtom = atom({
  key: "StylesAtom",
  default: defaultValues,
  dangerouslyAllowMutability: true,
});

//irregularRankListのatom
export const DataAtom = atom({
  key: "DataAtom",
  default: [],
});

export const SheetDataAtom = atom({
  key: "SheetDataAtom",
  default: [],
});

export const ToggleAtom = atom({
  key: "ToggleAtom",
  default: "block",
});

export const MenuAtom = atom({
  key: "MenuAtom",
  default: true,
});
