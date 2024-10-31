<template>
  <div class="container">
    <div class="btn-funcion">
      <button class="btn-agregar" id="agregar-actividad" @click="agregarActividad()">
        <router-link to="/">➕ actividad</router-link>
      </button>
      <button 
        class="btn-agregar" 
        id="borrar-tabla"
        @click="borrarTabla()" 
        v-if="actividadesStore.actividades.length > 0">
        <q-icon name="delete" color="red" size="sm"  />
      </button>
    </div>

    <div v-if="actividadesStore.actividades.length === 0" class="no-actividades">
      <p>No tienes actividades</p>
    </div>

    <div v-else class="table1">
      <q-table :rows="actividadesStore.actividades" :columns="columns" row-key="actividad" @row-click="editarActividad" class="table">
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
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useActividadesStore } from '../stores/stores'

const actividadesStore = useActividadesStore()
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

const borrarTabla = () => {
  actividadesStore.vaciarActividades()
  actividadesStore.actividades = [...actividadesStore.actividades] 
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 25px rgb(34, 16, 107);
  box-shadow: 5px 5px 10px 2px rgb(33, 9, 100);
  background: rgb(206,174,238);
  background: radial-gradient(circle, rgba(206,174,238,1) 0%, rgba(148,187,233,1) 100%);
  padding: 20px;
}
.table {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  font-style: normal;
  animation: slideIn 1s ease-in-out;
  animation: float 3s ease-in-out infinite;
  animation: gradient 5s ease infinite;
}
.table .q-table__top {
  background: rgb(206,174,238);
  background: radial-gradient(circle, rgba(206,174,238,1) 0%, rgba(148,187,233,1) 100%);
}

.btn-funcion {
  display: flex;
  justify-content: space-evenly;
}
button {
  background-color: white;
}

.btn-agregar {
  border: 2px solid transparent;
  font-size: 11px;
  font-family: inherit;
  color: rgb(3, 3, 3);
  box-sizing: border-box;
  border-radius: 16px;
  background-size: 200% 100%;
  animation: gradient 5s ease infinite;
  box-shadow: 0px 10px 25px rgb(34, 16, 107);
  margin-top: 20px;
  transition: all 0.3s ease-in-out;

}

#agregar-actividad:hover{
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  color: white;
  font-size: 15px;


}

#borrar-tabla:hover{
  cursor: pointer;
  background-color: rgba(255, 0, 0, 0.158);
  color: white;
  font-size: 15px;

}

.no-actividades {
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 16px;
  margin-top: 20px;
  font-family: "Archivo Black", sans-serif;
}
</style>
