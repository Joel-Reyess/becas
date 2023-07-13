<template>
  <q-page>
    <div class="q-pa-md">
      <div class="title">Beca Economica</div>
      <button-progress></button-progress>
      <TresProgress></TresProgress>

      <div class="q-gutter-md container">
        <q-form @submit="onSubmit" @reset="onReset">
          <div class="q-pt-lg">
            <q-card class="q-pa-md">
              <q-card-section>
                <div class="q-pa-md">
                  <p class="q-mb-sm">Los datos enviados son:</p>
                  <div class="q-mb-sm">
                    <strong>Nombre:</strong>
                    <span>{{ formData && formData.nombre }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Matrícula:</strong>
                    <span>{{ formData && formData.matricula }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>CURP:</strong>
                    <span>{{ formData && formData.curp }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Teléfono:</strong>
                    <span>{{ formData && formData.telefono }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Correo Institucional:</strong>
                    <span>{{ formData && formData.correoinstitucional }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Carrera:</strong>
                    <span>{{ getCarreraContent(formData && formData.carrera) }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Área:</strong>
                    <span>{{ getAreaContent(formData && formData.area) }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Grado:</strong>
                    <span>{{ getGradoContent(formData && formData.grado) }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Cuatrimestre:</strong>
                    <span>{{ formData && formData.cuatrimestre }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Grupo:</strong>
                    <span>{{ formData && formData.grupo }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Correo Tutor:</strong>
                    <span>{{ formData && formData.correotutor }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Género:</strong>
                    <span>{{ getGeneroContent(formData && formData.genero) }}</span>
                  </div>
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn label="Subir" type="submit" color="primary" class="q-mb-md" />
              </q-card-actions>
            </q-card>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ButtonProgress from "src/components/Alumno/ButtonProgress.vue";
import TresProgress from 'src/components/Alumno/TresProgress.vue';


export default {
  setup() {
      const formData = ref({
        nombre: '',
        matricula: '',
        curp: '',
        telefono: '',
        correoinstitucional: '',
        beca: '',
        carrera: '',
        area: '',
        grado: '',
        cuatrimestre: '',
        grupo: '',
        correotutor: '',
        genero: '',
      });

      const beca = ref('');
      const carreras = ref([]);
      const areas = ref([]);
      const grados = ref([]);
      const generos = ref([]);

      const getCarreraContent = (idcarrera) => {
      const carrera = carreras.value.find(c => c.value === idcarrera);
      return carrera ? carrera.label : '';
    };
      const getAreaContent = (idarea) => {
      const area = areas.value.find(c => c.value === idarea);
      return area ? area.label : '';
    };
      const getGradoContent = (idgrado) => {
      const grado = grados.value.find(c => c.value === idgrado);
      return grado ? grado.label : '';
    };
      const getGeneroContent = (idgenero) => {
      const genero = generos.value.find(c => c.value === idgenero);
      return genero ? genero.label : '';
    };

    onMounted(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/carrera");
        const carreraData = response.data;
        if (carreraData && carreraData.length > 0) {
          carreras.value = carreraData.map((item) => {
            return {
              label: item.carrera,
              value: item.idcarrera,
            };
          });
        }
        console.log(response);


      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/area");
        const areaData = response.data;
        if (areaData && areaData.length > 0) {
          areas.value = areaData.map((item) => {
            return {
              label: item.area,
              value: item.idarea,
            };
          });
        }
        console.log(response);


      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }

      try {
        const response = await axios.get("http://127.0.0.1:3000/api/grado");
        const gradoData = response.data;
        if (gradoData && gradoData.length > 0) {
          grados.value = gradoData.map((item) => {
            return {
              label: item.grado,
              value: item.idgrado,
            };
          });
        }
        console.log(response);

        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) {
          Object.assign(formData.value, savedFormData);
          console.log(savedFormData);
        }
      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }

      try {
        const response = await axios.get("http://127.0.0.1:3000/api/genero");
        const generoData = response.data;
        if (generoData && generoData.length > 0) {
          generos.value = generoData.map((item) => {
            return {
              label: item.genero,
              value: item.idgenero,
            };
          });
        }
        console.log(response);


      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }

    });

    const onSubmit = () => {

      if (beca.value === "Economica") {
        formData.value.beca = 4;
      }
      localStorage.setItem('formData', JSON.stringify(formData.value));
      axios
        .post('http://127.0.0.1:3000/api/form', formData.value)
        .then((res) => {
          console.log('Datos enviados correctamente');
        })
        .catch((error) => {
          console.error('Error al enviar los datos:', error.response.data);
        });

      localStorage.removeItem('formData');
    };


    return {
      formData,
      onSubmit,
      beca,
      getCarreraContent,
      getAreaContent,
      getGradoContent,
      getGeneroContent,
      carreras,
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

.my-card {
  display: contents;
}
</style>
