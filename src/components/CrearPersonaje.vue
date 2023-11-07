<template>
  <div class="container">
    <h1>Crear personaje</h1>
    <form v-if="statusSer===true" v-on:submit.prevent="crearPersonaje()">
        <div class="mb-3" style="width:300px">
            <label class="form-label">Nombre</label>
            <input v-model="personaje.nombre" type="text" class="form-control">
        </div>
        <div class="mb-3" style="width:300px">
            <label class="form-label">Imagen</label>
            <input v-model="personaje.imagen" type="text" class="form-control">
        </div>
        <div class="mb-3" style="width:300px">
            <label class="form-label">Serie</label>
            <select v-model="personaje.idSerie" class="form-select">
                <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{serie.nombre}}</option>
            </select>
        </div>
    </form>
  </div>
</template>

<script>
import ServiceSeries from "../Services/ServicesSeries";
const servicio = new ServiceSeries();
export default {
  name: "CrearPersonajeComponent",
  data() {
    return {
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
      series:[],
      statusSer:false
    };
  },
  methods: {
    crearPersonaje() {},
    cargarSeries() {
        servicio.getAllSeries().then(res=>{
            this.series=res;
            this.statusSer=true;
        });
    },
  },
  mounted(){
    this.cargarSeries();
  }
};
</script>

<style></style>
