<template>
  <q-page class="q-pa-md container" padding>
    <p class="title">Beca Academica</p>
    <button-progress></button-progress>
    <dos-progreso-bar></dos-progreso-bar>
    <q-space />
    <p>¡Adjuntar solo archivos PDF!</p>
    <q-space />
    <div class="q-pa-xs q-pt-lg">
      <q-card class="my-card q-card--bordered">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
        <div class="row" padding>
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="solicitud" label="Solicitud" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="credencial" label="Credencial, ambos lados" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="boleta" label="Boleta de calificaciones" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="comprobante" label="Comprobante de ingresos" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="socioeconomicos" label="Datos socioeconomicos" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="compromiso" label="Carta compromiso y aceptacion de beca" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="conducta" label="Carta buena conducta" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-toggle
          v-model="accept"
          label="Ya revise que las respuestas sean correctas"
        />
        <div class="col-12 q-pt-lg">
            <q-btn label="Continuar" type="submit" color="primary"/>
          </div>
          <q-space />
        </div>
      </q-form>
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
      solicitud: ref(null),
      credencial: ref(null),
      boleta: ref(null),
      comprobante: ref(null),
      socioeconomicos: ref(null),
      compromiso: ref(null),
      conducta: ref(null)
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
