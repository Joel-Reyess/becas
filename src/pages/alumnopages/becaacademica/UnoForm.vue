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
          <q-space />
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
          <q-space />
          <q-input
            filled
            type="email"
            v-model="correoinstitucional"
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
            type="text"
            v-model="beca"
            label="Tipo de beca"
            hint="Beca que desea solicitar"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
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
          <q-space />
          <q-input
            filled
            v-model="grado"
            label="Grado"
            hint="Grado al que perteneces ya sea TSU, LIC o ING"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            />
            <q-space />
            <q-input
            filled
            v-model="cuatrimestre"
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
            <q-space />
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
          <q-btn label="Continuar" type="submit" color="primary" @click="onSubmit" to="/alumno/academica/paso2" />

        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import ButtonProgress from "src/components/Alumno/ButtonProgress.vue";
import ProgresoBar from "src/components/Alumno/ProgresoBar.vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  components: {
    ButtonProgress,
    ProgresoBar,
  },
  setup() {
    const $q = useQuasar();
    const accept = ref(false);
    const router = useRouter();
    const nombre = ref();
    const matricula = ref();
    const curp = ref();
    const telefono = ref();
    const correoinstitucional = ref();
    const beca = ref();
    const carrera = ref();
    const area = ref();
    const grado = ref();
    const cuatrimestre = ref();
    const grupo = ref();
    const correotutor = ref();
    const genero = ref();

    onMounted(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/becas/1");
        beca.value = response.data[0].idbeca;
      } catch (error) {
        console.error("Error al obtener la beca:", error);
      }
    });

    const onSubmit = () => {
      const accept = true;
      if (accept !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Necesitas revisar que todo este correcto",
        });
      } else {
        const formData = {
          nombre: nombre.value,
          matricula: matricula.value,
          curp: curp.value,
          telefono: telefono.value,
          correoinstitucional: correoinstitucional.value,
          beca: beca.value,
          carrera: carrera.value,
          area: area.value,
          grado: grado.value,
          cuatrimestre: cuatrimestre.value,
          grupo: grupo.value,
          correotutor: correotutor.value,
          genero: genero.value,
        };
        localStorage.setItem('formData', JSON.stringify(formData));

        axios
          .post('http://127.0.0.1:3000/api/form', formData)
          .then(res => {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Datos enviados correctamente',
            });
            router.push('/alumno/academica/paso3');
          })
          .catch(error => {
            console.error('Error al enviar los datos:', error);
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'Error al enviar los datos',
            });
          });
      }
    };

    return {
      onSubmit,
      nombre,
      matricula,
      curp,
      telefono,
      correoinstitucional,
      beca,
      carrera,
      area,
      grado,
      cuatrimestre,
      grupo,
      correotutor,
      genero,
      accept,
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

.my-card{
  display: contents;
}
</style>
