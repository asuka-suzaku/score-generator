import axios from "axios";
import SortFontsData from "./SortFontsData";

export default function GetFontsJa(setFonts, fonts) {
  const API_KEY = process.env.REACT_APP_FONT_API_KEY;
  axios
    .get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&subset=japanese&sort=popularity`
    )
    .then((data) => {
      const sort = async (data) => {
        const result = await SortFontsData(data);

        setFonts(result);
      };
      sort(data);
    })
    .catch((e) => {
      throw new Error(e);
    });
}
