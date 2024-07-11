import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Body from "../Components/Body/Body";
import NotFound from "../Components/Error/NotFound";
import Generator from "../Components/Generator/Generator";
import Header from "../Components/Header/Header";
import HowTo from "../Components/HowTo/HowTo";
import Rule from "../Components/TermOfUse/Rule";

export default function Router() {
  const ROUTER = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouterScroll />}>
        <Route path="/" element={<Header />}>
          <Route index element={<Body />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/rules" element={<Rule />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={ROUTER} />;
}

export function RouterScroll() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
