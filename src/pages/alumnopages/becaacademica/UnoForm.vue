<template>
  <q-page class="q-pa-md container" padding>
    <p class="title">Beca Academica</p>
    <ButtonProgress></ButtonProgress>
    <ProgresoBar></ProgresoBar>
    <q-space />
    <div class="q-pa-xs q-pt-lg">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <div class="row">
          <q-input
            filled
            v-model="nombre"
            label="Nombre Completo"
            hint="Empezando por apellidos"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            type="number"
            v-model="matricula"
            label="Matricula"
            hint="Matricula de la escuela"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-input
            filled
            v-model="curp"
            label="Ingrese su curp"
            hint="Clave Única de Registro de Población"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            type="number"
            v-model="telefono"
            label="Telefono"
            hint="Numero propio"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-input
            filled
            type="email"
            v-model="correo"
            label="Correo"
            hint="Correo Institucional"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="correotutor"
            label="Correo del tutor"
            hint="Correo de tutor"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-input
            filled
            v-model="carrera"
            label="Carrera"
            hint="Carrera cursando"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="area"
            label="Area"
            hint="Area cursando"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-input
            filled
            v-model="cuatri"
            label="Cuatrimestre"
            hint="Cuatrimestre al que deseas aplicar la beca"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="grupo"
            label="Grupo"
            hint="Grupo al que perteneces"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-input
            filled
            v-model="genero"
            label="Genero"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
        </div>

        <q-toggle
          v-model="accept"
          label="Ya revise que las respuestas sean correctas"
        />

        <div>
          <q-btn label="Continuar" type="submit" color="primary" @click="onClick" to="/alumno/academica/paso2" />

        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import ButtonProgress from "src/components/Alumno/ButtonProgress.vue";
import ProgresoBar from "src/components/Alumno/ProgresoBar.vue";
export default {
  components: {
    ButtonProgress,
    ProgresoBar,
  },
  setup() {
    const $q = useQuasar();

    const nombre = ref(null);
    const matricula = ref(null);
    const curp = ref(null);
    const telefono = ref(null);
    const correo = ref(null);
    const correotutor = ref(null);
    const carrera = ref(null);
    const area = ref(null);
    const cuatri = ref(null);
    const grupo = ref(null);
    const genero = ref(null);
    const accept = ref(false);

    return {
      nombre,
      matricula,
      curp,
      telefono,
      correo,
      correotutor,
      carrera,
      area,
      cuatri,
      grupo,
      genero,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Necesitas revisar que todo este correcto",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        nombre.value = null;
        matricula.value = null;
        curp.value = null;
        telefono.value = null;
        correo.value = null;
        correotutor.value = null;
        carrera.value = null;
        area.value = null;
        cuatri.value = null;
        grupo.value = null;
        genero.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
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
