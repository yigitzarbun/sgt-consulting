import { lazy, Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import PageLoading from "../components/loading/PageLoading";

import Paths from "./Paths";

const Home = lazy(() => import("../modules/home/Home"));
const About = lazy(() => import("../modules/about/About"));
const Services = lazy(() => import("../modules/services/Services"));
const Porfolio = lazy(() => import("../modules/portfolio/Portfolio"));
const Project = lazy(() => import("../modules/project/Project"));
const Contact = lazy(() => import("../modules/contact/Contact"));

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
  <Suspense fallback={<PageLoading />}>
    <MainLayout>
      <Component />
    </MainLayout>
  </Suspense>
);

const routes: RouteObject[] = [
  { path: Paths.HOME, element: getRouteElement(Home) },
  { path: Paths.ABOUT, element: getRouteElement(About) },
  { path: Paths.SERVICES, element: getRouteElement(Services) },
  { path: Paths.PORTFOLIO, element: getRouteElement(Porfolio) },
  { path: `${Paths.PROJECT}:slug`, element: getRouteElement(Project) },
  { path: Paths.CONTACT, element: getRouteElement(Contact) },
];

export default createBrowserRouter(routes);
