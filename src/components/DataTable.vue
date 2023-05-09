<template>
  <section>
    <table>
      <caption v-if="props.isDoctors">Doctors' details</caption>
      <caption v-if="props.isPatients">Patients' details</caption>
      <thead>
        <tr>
          <td>Name</td>
          <td>Phone</td>
          <td v-if="props.isDoctors">Specialities</td>
          <td v-if="props.isPatients">file</td>
        </tr>
      </thead>
      <tbody>
        <tr v-if="props.isDoctors" v-for="doctor, index in doctors " :key="index">
          <td class="name">{{ doctor.name }}</td>
          <td class="phone">{{ doctor.phone }}</td>
          <td class="speciality">
            <ul>
              <li v-for=" speciality  of  doctor.specialities "
                :value="speciality">
                {{ speciality }}
              </li>
            </ul>
          </td>
          <CrudLinks @remove="remove(index)" @edit="edit(index, doctor)" />
        </tr>

        <tr v-if="props.isPatients" v-for="patient, index in patients "
          :key="index">
          <td class="name">{{ patient.name }}</td>
          <td class="phone">{{ patient.phone }}</td>
          <td class="file">
            {{ patient.file }}
          </td>
          <CrudLinks @remove="remove(index)" />
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script  setup>
import { computed, onBeforeMount } from 'vue';
// Stores
import { usePatientStore } from '@/stores/patients'
import { useDoctorStore } from '@/stores/doctors'
// Components
import CrudLinks from './CrudLinks.vue';

const props = defineProps({
  isDoctors: {
    type: Boolean,
    required: false
  },
  isPatients: {
    type: Boolean,
    required: false
  }
})

const doctorStore = useDoctorStore();
const patientStore = usePatientStore();

onBeforeMount(() => {
  if (props.isDoctors) doctorStore.getAll();
  if (props.isPatients) patientStore.getAll();
})


const doctors = computed(() => {
  return doctorStore.getDoctors;
})
const patients = computed(() => {
  return patientStore.getPatients;
})


const remove = (index) => {
  if (props.isDoctors) return doctorStore.removeDoctor(index);
  if (props.isPatients) return patientStore.removePatient(index);
}

</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';

table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;

  caption {
    font-size: 1.2rem;
    margin: 2rem;

    @include mQ($breakpoint-md) {
      font-size: 1rem;
      margin: 1.5rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 0.8rem;
    }
  }

  thead td {
    border-top: 1px solid $white;
    border-bottom: 1px solid $white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    font-size: 1.2rem;

    @include mQ($breakpoint-md) {
      font-size: 1rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 0.8rem;
    }
  }

  tbody {
    td {
      border-top: 1px solid $white;
      border-bottom: 1px solid $white;
    }

    @include crud-links;
  }

  .name,
  .phone,
  .file,
  .speciality {
    font-size: 1.2rem;
    font-weight: 500;

    @include mQ($breakpoint-md) {
      font-size: 1rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 0.8rem;
    }

  }

  .name,
  .phone,
  .file {
    text-align: center;
  }



  .name {
    background-color: rgba($color: $gray, $alpha: .1)
  }

  .phone {
    background-color: rgba($color: $gray, $alpha: .2);
  }

  .file,
  .speciality {
    background-color: rgba($color: $gray, $alpha: .3);
  }

  .speciality ul {
    padding-left: 1rem;
    margin-left: 1rem;

  }

}
</style>