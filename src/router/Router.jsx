import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import AgendarCita from "../pages/agendarcita/Agendarcita";
//import Principal from "../pages/principal/Principal";
import Videollamada from "../pages/videollamada/Videollamada";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/agendarcita",
    element: <AgendarCita />,
  },
 // {
 //   path: "/principal",
  //  element: <Principal />,
 // },
  {
    path: "/videollamada",
    element: <Videollamada />,
  },
]);
