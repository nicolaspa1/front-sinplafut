// core components
import InicioSesion from "views/admin/InicioSesion.js";
import CrearSesion from "views/admin/CrearSesion.js";
import ConfiguracionSesion from "views/admin/ConfiguracionSesion.js";
import CrearMetodo from "views/admin/CrearMetodo.js";
import ConfiguracionMetodo from "views/admin/ConfiguracionMetodo.js";
// @material-ui/icons components
import Add from "@material-ui/icons/Add";
import SportsSoccer from "@material-ui/icons/SportsSoccer";
import Settings from '@material-ui/icons/Settings'
var routes = [
  {
    divider: true,
  },
  {
    title: "NAVEGACION PRINCIPAL",
  },
  {
    path: "/index",
    name: "Inicio Sesion De Entrenamiento",
    icon: SportsSoccer,
    iconColor: "Primary",
    component: InicioSesion,
    layout: "/admin",
  },
  {
    path: "/crear-sesion-entrenamiento",
    name: "Crear Sesion De Entrenamiento",
    icon: Add,
    iconColor: "Primary",
    component: CrearSesion,
    layout: "/admin",
  },
  {
    path: "/configuracion-sesion-entrenamiento",
    name: "Configuracion Sesion De Entrenamiento",
    icon: Settings,
    iconColor: "Primary",
    component: ConfiguracionSesion,
    layout: "/admin",
  },
  {
    path: "/crear-metodo-entrenamiento",
    name: "Crear Metodo De Entrenamiento",
    icon: Add,
    iconColor: "Error",
    component: CrearMetodo,
    layout: "/admin",
  },
  {
    path: "/configuracion-metodo-entrenamiento",
    name: "Configuracion Metodo De Entrenamiento",
    icon: Settings,
    iconColor: "Error",
    component: ConfiguracionMetodo,
    layout: "/admin",
  },
];
export default routes;
