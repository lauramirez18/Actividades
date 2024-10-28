<template>
  <div>
    
    <form @submit.prevent="guardarCambios" class="form">
      <h2>Editar Actividad</h2>
      <input v-model="actividadEditable.actividad" placeholder="Actividad" />
      <input type="date" v-model="actividadEditable.fecha" />
      <q-select v-model="actividadEditable.estado" :options="['Completado', 'Pendiente']" label="Estado" />
      <button  type="submit"> Guardar Cambios</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useActividadesStore } from '../stores/stores'

const route = useRoute()
const router = useRouter()
const actividadesStore = useActividadesStore()

const actividadEditable = ref([])


onMounted(() => {
  const actividadId = Number(route.params.id) 
  const actividad = actividadesStore.actividades.find(a => a.id === actividadId)
  
  if (actividad) {
    actividadEditable.value = { ...actividad }
  } else {
    console.error(`No se encontró una actividad con id: ${actividadId}`)
    router.push('/') 
  }
})
const guardarCambios = () => {
  actividadesStore.editarActividad(route.params.id, actividadEditable.value)
  console.log(actividadEditable.value)
  router.push('/actividades')
}
</script>
<style scoped>
form {
 
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  font-style: normal;
  animation: slideIn 1s ease-in-out;
  animation: float 3s ease-in-out infinite;
  animation: gradient 5s ease infinite;
  box-shadow: 0px 10px 25px rgb(34, 16, 107);
  box-shadow: 5px 5px 30px 10px rgb(33, 9, 100);
            background: rgb(206,174,238);
            background: radial-gradient(circle, rgba(206,174,238,1) 0%, rgba(148,187,233,1) 100%);
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  
}
h2{
  text-align: center;
  margin-bottom: 20px;
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  font-style: normal;
  animation: slideIn 1s ease-in-out;
  animation: float 3s ease-in-out infinite;
}

button {
  border: 2px solid transparent;
  font-size: 12px;
  font-family: inherit;
  color: rgb(3, 3, 3);
  box-sizing: border-box;
  background-size: 200% 100%;
  animation: gradient 5s ease infinite;

  margin-top: 20px;
  cursor: pointer;
}
</style>
