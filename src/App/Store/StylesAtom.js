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
    fontFamily:
      "Noto Sans JP,sans-serif,400,https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFE8j75vY0rw-oME.ttf",
    fontColor: "#000",
    fontSize: 18,
    useLanguage: "useJa",
  },
  decoration: {
    bgColor: "#fff",
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

export const DemoDataAtom = atom({
  key: "DemoDataAtom",
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

export const FontsJaAtom = atom({
  key: "FontsJaAtom",
  default: [],
});

export const ErrorAtom = atom({
  key: "ErrorAtom",
  default: null,
});

export const IsLoadingAtom = atom({
  key: "IsLoadingAtom",
  default: true,
});

export const WindowAtom = atom({ key: "Window", default: 0 });

export const DemoAtom = atom({
  key: "DemoAtom",
  default: defaultValues,
  dangerouslyAllowMutability: true,
});
