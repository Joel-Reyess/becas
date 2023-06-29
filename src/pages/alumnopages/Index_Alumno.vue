<template>
 <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img
        src="public/img/academic.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">Academica</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/academica" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="public/img/cultural.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">Cultural</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="public/img/deportiva.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">Deportiva</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="public/img/economica.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">Económica</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="public/img/excelenciaa.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">Excelencia</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="public/img/inclusion.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">Inclusión</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="public/img/postgrado.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">Postgrado</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="public/img/referencia.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">Referencia</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="public/img/reincorporacion.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">Reincorporación</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="public/img/cultural.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">Cultural</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default {
  setup () {
    return {
      expanded: ref(false),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  }
}
</script>

<style>
/* .titulo {
  color: #1ab192;
  text-transform: uppercase;
  line-height: 40px;
  font-size: 1.9em;
  text-align: center;
} */

.my-card{
  width: 100%;
  max-width: 350px;
}

</style>
