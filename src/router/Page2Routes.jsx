import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    childeren: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    childeren: <UrlParameter />
  }
];
