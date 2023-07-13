<template>
  <q-page class="q-ma-xs fixes-center" padding>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md fixed-center"
      >
        <q-card class="my-card ">
          <q-card-section>
            Cumples con los siguientes requisitos
            <q-btn flat color="black" label="Omitir" @click="onClick" to="/alumno/economica/paso1" />
          </q-card-section>
          <q-card-section>
            ¿Aprobaste todas la materias del cuatrimestre anterior?
            <q-space />
            <q-radio name="materias" v-model="materias" val="materias-si" label="Si" />
            <q-radio name="materias" v-model="materias" val="materias-no" label="No" />
          </q-card-section>
          <q-card-section>
            ¿Estas cursando el cuatrimestre libre de deudas?
            <q-space />
            <q-radio name="deudas" v-model="deudas" val="deudas-si" label="Si" />
            <q-radio name="deudas" v-model="deudas" val="deudas-no" label="No" />
          </q-card-section>
          <q-card-section>
            ¿Tienes promedio minimo de 8?
            <q-space />
            <q-radio name="promedio" v-model="promedio" val="promedio-si" label="Si" />
            <q-radio name="promedio" v-model="promedio" val="promedio-no" label="No" @click="onClick" to="/alumno/economica/paso1" />
          </q-card-section>
          <q-btn label="Subir" type="submit" class="" color="primary" @click="onClick" to="/alumno/economica/paso1"/>
        </q-card>
      </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const submitResult = ref([])

    return {
      materias: ref('materias-si'),
      deudas: ref('deudas-si'),
      promedio: ref('promedio-si'),
      submitResult,

      onSubmit (evt) {
        const formData = new FormData(evt.target)
        const data = []

        for (const [ name, value ] of formData.entries()) {
          data.push({
            name,
            value
          })
        }

        submitResult.value = data
      }
    }
  }
}
</script>

<style>

.my-card{
  max-width: 550px;
}
</style>
