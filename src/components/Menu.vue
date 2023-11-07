<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Menu</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
            <router-link class="nav-link" aria-current="page" to="/crearpersonaje">Crear personaje</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Series
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-for="serie in series" :key="serie">
                <router-link
                  class="dropdown-item"
                  :to="'/detalles/' + serie.idSerie"
                  >{{ serie.nombre }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceSeries from "../Services/ServicesSeries";
const servicio = new ServiceSeries();
export default {
  name: "MenuComponent",
  data() {
    return {
      series: [],
    };
  },
  methods: {
    cargarSeries() {
      servicio.getAllSeries().then((res) => {
        this.series = res;
      });
    },
  },
  mounted() {
    this.cargarSeries();
  },
};
</script>

<style></style>
