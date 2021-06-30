<template>
  <form class="form" @submit.prevent="procesarFormulario">
    <Formulario :tarea="tarea"/>
  </form>
  <hr>
  <Listatareas/>
</template>

<script>
import Formulario from '../components/Formulario.vue';
import Listatareas from '../components/ListaTareas.vue'
import { mapActions } from 'vuex';
const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
    Formulario,
    Listatareas
  },
  data() {
    return {
      tarea: {
        nombre: '',
        categorias: [],
        nivel: ''
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']),

    procesarFormulario(){
      // ver datos en console
      // console.log(this.tarea)

      // validación para que nombre no esté vacío
      if(this.tarea.nombre.trim() === ""){
        alert('vacío')
        return
      };

      // generar id con shirt id
      this.tarea.id = shortid.generate()
      // console.log(this.tarea.id)

      // Creamos la tarea
      this.setTareas(this.tarea)

      // limpiar formulario dentro de la acción. Despues de enviar se limpia.
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        nivel: ''
      }
    }
  },
}
</script>

<style scoped>
  .form{
    max-width: 300px;
  }
</style>