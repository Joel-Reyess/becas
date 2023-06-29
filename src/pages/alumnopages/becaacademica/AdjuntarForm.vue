<template>
  <q-page class="q-pa-md container" padding>
    <p class="title">Beca Academica</p>
    <button-progress></button-progress>
    <dos-progreso-bar></dos-progreso-bar>
    <q-space />
    <p>¡Adjuntar solo archivos PDF!</p>
    <q-space />
    <div class="q-pa-xs q-pt-lg">
      <q-card class="my-card">
        <q-file filled bottom-slots v-model="model" label="Credencial" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
      </q-card>
    </div>
  </q-page>

</template>

<script>
import { defineComponent,ref } from "vue";
import ButtonProgress from "src/components/Alumno/ButtonProgress.vue";
import DosProgresoBar from "src/components/Alumno/DosProgresoBar.vue";
export default {

  components:{
    ButtonProgress,
    DosProgresoBar,
  },
  setup () {
    return {
      model: ref(null)
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  display: flex;
  width: 171px;
  height: 29px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
}
</style>
