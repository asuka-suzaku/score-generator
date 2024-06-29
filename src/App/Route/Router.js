import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Body from "../Components/Body/Body";
import LogIn from "../Components/Body/LogIn";
import Generator from "../Components/Generator/Generator";
import Preview from "../Components/Generator/Elements/Preview";
import Header from "../Components/Header/Header";

export default function Router() {
  const ROUTER = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route path="" element={<Body />} />
        <Route index element={<Body />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="generator" element={<Generator />} />
        <Route path="/preview" element={<Preview />} />
      </Route>
    )
  );

  return <RouterProvider router={ROUTER} />;
}
