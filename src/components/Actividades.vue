<template>
  <button class="btn-agregar">
    <router-link to="/">➕ actividad</router-link>
  </button>
  <div class="table1">
    <q-table :rows="actividades" :columns="columns" row-key="actividad" @row-click="editarActividad" class="table">
      <template v-slot:body-cell-estado="props">
        <q-td :class="props.row.estado === 'Completado' ? 'text-green' : 'text-red'">
          {{ props.row.estado }}
        </q-td>
      </template>
      <template v-slot:body-cell-acciones="props">
        <button to="/editar" @click="editarActividad(props.row)">✏️</button>
        <button @click="borrarActividad(props.row)">❌</button>
      </template>
    </q-table>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useActividadesStore } from '../stores/stores'


const actividadesStore = useActividadesStore()
const actividades = actividadesStore.actividades
const router = useRouter()



const columns = [
  { name: 'actividad', label: 'Actividad', field: 'actividad', align: 'center' },
  { name: 'fecha', label: 'Fecha', field: 'fecha', align: 'center', format: val => new Date(val).toLocaleDateString() },
  { name: 'estado', label: 'Estado', field: 'estado', align: 'center' },
  { name: 'acciones', label: 'Acciones', field: 'acciones', align: 'center' }
]


const editarActividad = (actividad) => {
  if (actividad.id) {
    router.push({ name: 'Editar', params: { id: actividad.id } }) 
  } else {
    console.error('La actividad no tiene un id definido.')
  }
}


const borrarActividad = (actividad) => {
  actividadesStore.borrarActividad(actividad)
}
</script>

<style scoped>
.table {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  font-style: normal;
  box-shadow: 0px 10px 25px rgb(34, 16, 107);
  box-shadow: 5px 5px 10px 2px rgb(33, 9, 100);
  background: rgb(206,174,238);
  background: radial-gradient(circle, rgba(206,174,238,1) 0%, rgba(148,187,233,1) 100%);
 

}
button {
  background-color: transparent;
}

.btn-agregar {
 
  border: 2px solid transparent;
  font-size: 24px;
  font-family: inherit;
  color: rgb(3, 3, 3);
  box-sizing: border-box;
  border-radius: 16px;
  background-size: 200% 100%;
  animation: gradient 5s ease infinite;
  box-shadow: 0px 10px 25px rgb(34, 16, 107);
  margin-top: 20px;
}



</style>
