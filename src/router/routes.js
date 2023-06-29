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
