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
      {
        path: '/details/:idsolicitud', // El ID es el identificador único del registro que se pasará en la URL
        name: 'DetailsPage',
        component: () => import("src/pages/adminpages/DetallesBeca.vue"),
        props: true,
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
        path: "academica/prepaso",
        name: "academica/prepaso",
        component: () => import("src/pages/alumnopages/becaacademica/SocioAca.vue"),
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
        path: "cultural/socio",
        name: "cultural/socio",
        component: () => import("src/pages/alumnopages/becacultural/SocioAcac.vue"),
      },
      {
        path: "cultural/paso1",
        name: "cultural/paso1",
        component: () => import("src/pages/alumnopages/becacultural/UnoFormc.vue"),
      },
      {
        path: "cultural/paso2",
        name: "cultural/paso2",
        component: () => import("src/pages/alumnopages/becacultural/ResumenBecac.vue"),
      },
      {
        path: "cultural/paso3",
        name: "cultural/paso3",
        component: () => import("src/pages/alumnopages/becacultural/AdjuntarFormc.vue"),
      },
      {
        path: "deportiva",
        name: "deportiva",
        component: () => import("src/pages/alumnopages/becadeportiva/PreFormd.vue"),
      },
      {
        path: "deportiva/socio",
        name: "deportiva/socio",
        component: () => import("src/pages/alumnopages/becadeportiva/SocioAcad.vue"),
      },
      {
        path: "deportiva/paso1",
        name: "deportiva/paso1",
        component: () => import("src/pages/alumnopages/becadeportiva/UnoFormd.vue"),
      },
      {
        path: "deportiva/paso2",
        name: "deportiva/paso2",
        component: () => import("src/pages/alumnopages/becadeportiva/ResumenBecad.vue"),
      },
      {
        path: "deportiva/paso3",
        name: "deportiva/paso3",
        component: () => import("src/pages/alumnopages/becadeportiva/AdjuntarFormd.vue"),
      },
      {
        path: "economica",
        name: "economica",
        component: () => import("src/pages/alumnopages/becaeconomica/PreFormEc.vue"),
      },
      {
        path: "economica/socio",
        name: "economica/socio",
        component: () => import("src/pages/alumnopages/becaeconomica/SocioAcaec.vue"),
      },
      {
        path: "economica/paso1",
        name: "economica/paso1",
        component: () => import("src/pages/alumnopages/becaeconomica/UnoFormEc.vue"),
      },
      {
        path: "economica/paso2",
        name: "economica/paso2",
        component: () => import("src/pages/alumnopages/becaeconomica/ResumenBecaEc.vue"),
      },
      {
        path: "economica/paso3",
        name: "economica/paso3",
        component: () => import("src/pages/alumnopages/becaeconomica/AdjuntarFormEc.vue"),
      },
      {
        path: "excelencia",
        name: "excelencia",
        component: () => import("src/pages/alumnopages/becaexcelencia/PreFormEx.vue"),
      },
      {
        path: "excelencia/socio",
        name: "excelencia/socio",
        component: () => import("src/pages/alumnopages/becaexcelencia/SocioAcaEx.vue"),
      },
      {
        path: "excelencia/paso1",
        name: "excelencia/paso1",
        component: () => import("src/pages/alumnopages/becaexcelencia/UnoFormEx.vue"),
      },
      {
        path: "excelencia/paso2",
        name: "excelencia/paso2",
        component: () => import("src/pages/alumnopages/becaexcelencia/ResumenBecaEx.vue"),
      },
      {
        path: "excelencia/paso3",
        name: "excelencia/paso3",
        component: () => import("src/pages/alumnopages/becaexcelencia/AdjuntarFormEx.vue"),
      },
      {
        path: "inclusion",
        name: "inclusion",
        component: () => import("src/pages/alumnopages/becainclusion/PreFormIn.vue"),
      },
      {
        path: "inclusion/socio",
        name: "inclusion/socio",
        component: () => import("src/pages/alumnopages/becainclusion/SocioAcaIn.vue"),
      },
      {
        path: "inclusion/paso1",
        name: "inclusion/paso1",
        component: () => import("src/pages/alumnopages/becainclusion/UnoFormIn.vue"),
      },
      {
        path: "inclusion/paso2",
        name: "inclusion/paso2",
        component: () => import("src/pages/alumnopages/becainclusion/ResumenBecaIn.vue"),
      },
      {
        path: "inclusion/paso3",
        name: "inclusion/paso3",
        component: () => import("src/pages/alumnopages/becainclusion/AdjuntarForm.vue"),
      },
      {
        path: "postgrado",
        name: "postgrado",
        component: () => import("src/pages/alumnopages/becapostgrado/PreFormPo.vue"),
      },
      {
        path: "postgrado/socio",
        name: "postgrado/socio",
        component: () => import("src/pages/alumnopages/becapostgrado/SocioAcaPo.vue"),
      },
      {
        path: "postgrado/paso1",
        name: "postgrado/paso1",
        component: () => import("src/pages/alumnopages/becapostgrado/UnoFormPo.vue"),
      },
      {
        path: "postgrado/paso2",
        name: "postgrado/paso2",
        component: () => import("src/pages/alumnopages/becapostgrado/ResumenBecaPo.vue"),
      },
      {
        path: "postgrado/paso3",
        name: "postgrado/paso3",
        component: () => import("src/pages/alumnopages/becapostgrado/AdjuntarFormPo.vue"),
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
        component: () => import("src/pages/alumnopages/becareincorporacion/PreFormRe.vue"),
      },
      {
        path: "reincorporacion/socio",
        name: "reincorporacion/socio",
        component: () => import("src/pages/alumnopages/becareincorporacion/SocioAcaRe.vue"),
      },
      {
        path: "reincorporacion/paso1",
        name: "reincorporacion/paso1",
        component: () => import("src/pages/alumnopages/becareincorporacion/UnoFormRe.vue"),
      },
      {
        path: "reincorporacion/paso2",
        name: "reincorporacion/paso2",
        component: () => import("src/pages/alumnopages/becareincorporacion/ResumenBecaRe.vue"),
      },
      {
        path: "reincorporacion/paso3",
        name: "reincorporacion/paso3",
        component: () => import("src/pages/alumnopages/becareincorporacion/AdjuntarFormRe.vue"),
      },
      {
        path: "transporte",
        name: "transporte",
        component: () => import("src/pages/alumnopages/becatransporte/PreFormTr.vue"),
      },
      {
        path: "transporte/socio",
        name: "transporte/socio",
        component: () => import("src/pages/alumnopages/becatransporte/SocioAcaTr.vue"),
      },
      {
        path: "transporte/paso1",
        name: "transporte/paso1",
        component: () => import("src/pages/alumnopages/becatransporte/UnoFormTr.vue"),
      },
      {
        path: "transporte/paso2",
        name: "transporte/paso2",
        component: () => import("src/pages/alumnopages/becatransporte/ResumenBecaTr.vue"),
      },
      {
        path: "transporte/paso3",
        name: "transporte/paso3",
        component: () => import("src/pages/alumnopages/becatransporte/AdjuntarFormTr.vue"),
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
