import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import MainView from "../views/MainView.vue";
import RegistroView from "../views/RegistroView.vue";
import PerfilView from "../views/PerfilView.vue";
import ModalView from "../views/ModalView.vue";
import PassView from "../views/PassView.vue";

import PublicacionesComp from "../components/PublicacionesComp.vue";
import PublicarComp from "../components/PublicarComp.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
    children: [
      {
        path: "/publicaciones",
        name: "publicaciones",
        component: PublicacionesComp,
      },
      {
        path: "/publicar",
        name: "publicar",
        component: PublicarComp,
      },
    ],
  },
  {
    path: "/registro",
    name: "registro",
    component: RegistroView,
  },
  {
    path: "/perfil",
    name: "perfil",
    component: PerfilView,
  },
  {
    path: "/modperfil",
    name: "modperfil",
    component: ModalView,
  },
  {
    path: "/modpassword",
    name: "modpassword",
    component: PassView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
