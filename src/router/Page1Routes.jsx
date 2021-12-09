import { Page1DetailA } from "../page1DetailA";
import { Page1DetailB } from "../page1DetailB";
import { Page1 } from "../Page1";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/",
    exact: false,
    children: <Page1DetailB />
  }
];
