<template>
  <div>
    <h1>Personajes {{$route.params.id}}</h1>
    <router-link :to="'/detalles/'+$route.params.id">Back to series</router-link>
    <table class="table table-secondary table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="personaje in personajes" :key="personaje">
                <td>{{personaje.nombre}}</td>
                <td><img :src="personaje.imagen" style="width:100px;height:100px;"/></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceSeries from "../Services/ServicesSeries";
const servicio = new ServiceSeries();
export default {
  name: "PersonajesComponent",
  data() {
    return {
      personajes: [],
    };
  },
  methods: {
    cargarPersonajes() {
      var id = this.$route.params.id;
      servicio.findPersonajesSerie(id).then((res) => {
        this.personajes = res;
      });
    },
  },
  mounted() {
    this.cargarPersonajes();
  },
  watch: {
    "$route.params.id"(next, old) {
      if (next != old) {
        this.cargarPersonajes();
      }
    },
  },
};
</script>

<style>
</style>