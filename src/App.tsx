import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./containers";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
