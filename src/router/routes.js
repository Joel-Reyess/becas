import { useUserStore } from "src/stores/user-store";

function verifyLogin(to){
  const userStore = useUserStore();
  if (!userStore.getUser) {
    return { name: "login"};
  }
}

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: () => import("src/pages/adminpages/IndexPage.vue"),
      },
      {
        path: "menu",
        name: "menu",
        component: () => import("src/pages/adminpages/GeneralView.vue"),
        beforeEnter: [verifyLogin],
      },
      {
        path: "aproved",
        name: "aproved",
        component: () => import("src/pages/adminpages/AprovadosPage.vue"),
      },
      {
        path: "rejected",
        name: "rejected",
        component: () => import("src/pages/adminpages/RechazadosPage.vue"),
      },
      {
        path: "process",
        name: "process",
        component: () => import("src/pages/adminpages/ProcesoPage.vue"),
      },
      {
        path: "reva",
        name: "reva",
        component: () => import("src/pages/adminpages/RevalidadosPage.vue"),
      },
    ],
  },
  {
    path: "/alumno",
    component: () => import("layouts/AlumnoLayout.vue"),
    children: [
      {
        path: "",
        name: "alumno",
        component: () => import("src/pages/alumnopages/Index_Alumno.vue"),
      },
      {
        path: "formatos",
        name: "formatos",
        component: () => import("src/pages/alumnopages/FormatosAlumno.vue"),
      },
      {
        path: "mibeca",
        name: "mibeca",
        component: () => import("src/pages/alumnopages/MiBeca.vue"),
      },
      {
        path: "academica",
        name: "academica",
        component: () => import("src/pages/alumnopages/becaacademica/PreForm.vue"),
      },
      {
        path: "academica/paso1",
        name: "academica/paso1",
        component: () => import("src/pages/alumnopages/becaacademica/UnoForm.vue"),
      },
      {
        path: "academica/paso2",
        name: "academica/paso2",
        component: () => import("src/pages/alumnopages/becaacademica/AdjuntarForm.vue"),
      },
      {
        path: "academica/paso3",
        name: "academica/paso3",
        component: () => import("src/pages/alumnopages/becaacademica/ResumenBeca.vue"),
      },
      {
        path: "cultural",
        name: "cultural",
        component: () => import("src/pages/alumnopages/becacultural/PreFormc.vue"),
      },
      {
        path: "cultural/paso1",
        name: "cultural/paso1",
        component: () => import("src/pages/alumnopages/becacultural/UnoFormc.vue"),
      },
      {
        path: "cultural/paso2",
        name: "cultural/paso2",
        component: () => import("src/pages/alumnopages/becacultural/AdjuntarFormc.vue"),
      },
      {
        path: "cultural/paso3",
        name: "cultural/paso3",
        component: () => import("src/pages/alumnopages/becacultural/ResumenBecac.vue"),
      },
      {
        path: "deportiva",
        name: "deportiva",
        component: () => import("src/pages/alumnopages/becadeportiva/PreFormd.vue"),
      },
      {
        path: "deportiva/paso1",
        name: "deportiva/paso1",
        component: () => import("src/pages/alumnopages/becadeportiva/UnoFormd.vue"),
      },
      {
        path: "deportiva/paso2",
        name: "deportiva/paso2",
        component: () => import("src/pages/alumnopages/becadeportiva/AdjuntarFormd.vue"),
      },
      {
        path: "deportiva/paso3",
        name: "deportiva/paso3",
        component: () => import("src/pages/alumnopages/becadeportiva/ResumenBecad.vue"),
      },
      {
        path: "economica",
        name: "economica",
        component: () => import("src/pages/alumnopages/becaeconomica/PreFormEc.vue"),
      },
      {
        path: "economica/paso1",
        name: "economica/paso1",
        component: () => import("src/pages/alumnopages/becaeconomica/UnoFormEc.vue"),
      },
      {
        path: "economica/paso2",
        name: "economica/paso2",
        component: () => import("src/pages/alumnopages/becaeconomica/AdjuntarFormEc.vue"),
      },
      {
        path: "economica/paso3",
        name: "economica/paso3",
        component: () => import("src/pages/alumnopages/becaeconomica/ResumenBecaEc.vue"),
      },
      {
        path: "excelencia",
        name: "excelencia",
        component: () => import("src/pages/alumnopages/becaexcelencia/PreFormEx.vue"),
      },
      {
        path: "excelencia/paso1",
        name: "excelencia/paso1",
        component: () => import("src/pages/alumnopages/becaexcelencia/UnoFormEx.vue"),
      },
      {
        path: "excelencia/paso2",
        name: "excelencia/paso2",
        component: () => import("src/pages/alumnopages/becaexcelencia/AdjuntarFormEx.vue"),
      },
      {
        path: "excelencia/paso3",
        name: "excelencia/paso3",
        component: () => import("src/pages/alumnopages/becaexcelencia/ResumenBecaEx.vue"),
      },
      {
        path: "inclusion",
        name: "inclusion",
        component: () => import("src/pages/alumnopages/becainclusion/PreForm.vue"),
      },
      {
        path: "inclusion/paso1",
        name: "inclusion/paso1",
        component: () => import("src/pages/alumnopages/becainclusion/UnoForm.vue"),
      },
      {
        path: "inclusion/paso2",
        name: "inclusion/paso2",
        component: () => import("src/pages/alumnopages/becainclusion/AdjuntarForm.vue"),
      },
      {
        path: "inclusion/paso3",
        name: "inclusion/paso3",
        component: () => import("src/pages/alumnopages/becainclusion/ResumenForm.vue"),
      },
      {
        path: "postgrado",
        name: "postgrado",
        component: () => import("src/pages/alumnopages/becapostgrado/PreForm.vue"),
      },
      {
        path: "postgrado/paso1",
        name: "postgrado/paso1",
        component: () => import("src/pages/alumnopages/becapostgrado/UnoForm.vue"),
      },
      {
        path: "postgrado/paso2",
        name: "postgrado/paso2",
        component: () => import("src/pages/alumnopages/becapostgrado/AdjuntarForm.vue"),
      },
      {
        path: "postgrado/paso3",
        name: "postgrado/paso3",
        component: () => import("src/pages/alumnopages/becapostgrado/ResumenForm.vue"),
      },
      {
        path: "referencia",
        name: "referencia",
        component: () => import("src/pages/alumnopages/becareferencia/PreForm.vue"),
      },
      {
        path: "referencia/paso1",
        name: "referencia/paso1",
        component: () => import("src/pages/alumnopages/becareferencia/UnoForm.vue"),
      },
      {
        path: "referencia/paso2",
        name: "referencia/paso2",
        component: () => import("src/pages/alumnopages/becareferencia/AdjuntarForm.vue"),
      },
      {
        path: "referencia/paso3",
        name: "referencia/paso3",
        component: () => import("src/pages/alumnopages/becareferencia/ResumenForm.vue"),
      },
      {
        path: "reincorporacion",
        name: "reincorporacion",
        component: () => import("src/pages/alumnopages/becareincorporacion/PreForm.vue"),
      },
      {
        path: "reincorporacion/paso1",
        name: "reincorporacion/paso1",
        component: () => import("src/pages/alumnopages/becareincorporacion/UnoForm.vue"),
      },
      {
        path: "reincorporacion/paso2",
        name: "reincorporacion/paso2",
        component: () => import("src/pages/alumnopages/becareincorporacion/AdjuntarForm.vue"),
      },
      {
        path: "reincorporacion/paso3",
        name: "reincorporacion/paso3",
        component: () => import("src/pages/alumnopages/becareincorporacion/ResumenForm.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
