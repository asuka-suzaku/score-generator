import LoadingPage from "./App/Components/Load/Loading";
import Router from "./App/Route/Router";
import { useRecoilState } from "recoil";
import { IsLoadingAtom } from "./App/Store/StylesAtom";

function App() {
  const [isLoad, setLoad] = useRecoilState(IsLoadingAtom);
  setTimeout(() => {
    setLoad(false);
  }, 6000);
  return isLoad ? <LoadingPage /> : <Router />;
}

export default App;
