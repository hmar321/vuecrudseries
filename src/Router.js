import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/Home.vue";
import DetallesSerieComponent from "./components/DetallesSerie.vue";
import PersonajesComponent from "./components/Personajes.vue";
import CrearPersonajeComponent from "./components/CrearPersonaje.vue";

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/crearpersonaje", component: CrearPersonajeComponent },
    { path: "/detalles/:id", component: DetallesSerieComponent },
    { path: "/personajes/:id", component: PersonajesComponent },
];

const router=createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router;