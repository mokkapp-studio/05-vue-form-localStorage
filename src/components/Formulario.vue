<template>
  <label for="">Nombre</label>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input 
        type="text" 
        class="form-control"  
        aria-describedby="emailHelp"
        v-model.trim="tarea.nombre"
      >
    </div>
    <h3>Categorias</h3>
    <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="checkbox" 
        id="check-1"
        v-model="tarea.categorias"
        value="react"
      >
        <label 
          class="form-check-label" 
          for="check-1"
        >
          React
        </label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="checkbox" 
        id="check-2" 
        v-model="tarea.categorias"
        value="vue" 
      >
      <label 
        class="form-check-label" 
        for="check-2"
      >
        Vue
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="checkbox" 
        id="check-3" 
        v-model="tarea.categorias"
        value="next.js" 
      >
      <label 
        class="form-check-label" 
        for="check-3"
      >
        Next.js
      </label>
    </div>
    <h3>Nivel</h3>
    <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="radio" 
        name="flexRadioDefault" 
        id="radio-1"
        v-model="tarea.nivel"
        value="urgente" 
      >
      <label class="form-check-label" for="radio-1">
        Urgente
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="radio" 
        name="flexRadioDefault" 
        id="radio-2"
        v-model="tarea.nivel"
        value="normal" 
      >
      <label class="form-check-label" for="radio-2">
        Normal
      </label>
    </div>
    <br><br>
    <button 
      type="submit" 
      class="btn btn-dark"
      :disabled="bloquear"
    >
      enviar
    </button>  
</template>

<script>
export default {
    props: {
        tarea: Object
    },
    computed:  {
        // función para bloquear botón en caso de que nombre esté vacío.
        bloquear() {
            return this.tarea.nombre.trim() === "" ? true : false
        }
    }
}
</script>
