<template>
  <!-- <form @submit.prevent="addDoctor"> -->
  <form @submit.prevent="submit">
    <h2 v-if="props.isDoctors">Editing Doctors' data</h2>
    <h2 v-if="props.isPatients">Editing Patients' data</h2>
    <div class="flex">
      <div class="container">
        <label for="name">Name: </label>
        <input type="text" name="name" id="name" required minlength="8"
          maxlength="50">
      </div>
      <div class="container">
        <label for="phone">phone: </label>
        <input type="text" name="phone" id="phone" required minlength="10"
          maxlength="20">
      </div>
      <div class="select">
        <label for="operation">Add new data or edit existing data</label>
        <select name="operation" id="operation">
          <option value="new">New</option>
          <option v-if="props.isDoctors" v-for="doctor, index in doctors"
            :key="index" :value="index">
            {{ doctor.name }}</option>
          <option v-if="props.isPatients" v-for="patient, index in patients"
            :key="index" :value="index">
            {{ patient.name }}</option>
        </select>
      </div>
      <div v-if="props.isPatients" class="container file">
        <!-- optional patient file -->
        <label for="file">Upload file </label>
        <input type="file" name="file" id="file"
          accept=".doc,.docx,.txt,.png,.jpg,.pdf">
      </div>
    </div>
    <div v-if="props.isDoctors" class="specialites">
      <p>Choose your specialities: </p>
      <ul class="checkboxes">
        <li v-for="speciality, index in specialities" :ket="index"
          class="checkbox">
          <input type="checkbox" :id="speciality" :name="speciality"
            :value="speciality" />
          <label :for="speciality">{{ speciality }}</label>
        </li>
      </ul>
    </div>

    <button type="submit" value="Submit">Submit</button>
  </form>
</template>
<script setup>
import { computed } from 'vue';
// Stores
import { useDoctorStore } from '@/stores/doctors'
import { usePatientStore } from '@/stores/patients'

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

const patientStore = usePatientStore();
const doctorStore = useDoctorStore();

const specialities = computed(() => {
  return doctorStore.getSpecialities
})


const doctors = computed(() => {
  return doctorStore.getDoctors;
})
const patients = computed(() => {
  return patientStore.getPatients;
})


const submit = async () => {
  const form = document.querySelector('form');
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const operation = document.getElementById('operation').value;


  if (props.isDoctors) {
    let specialities = [];
    document.querySelectorAll('.checkbox input').forEach(speciality => {
      if (speciality.checked) specialities.push(speciality.value)
    });
    const doctor = { name, phone, specialities };
    if (operation === 'new') {
      await doctorStore.addDoctor(doctor);
    } else {
      await doctorStore.editDoctor(operation, doctor);
    }
  }

  if (props.isPatients) {
    const file = document.getElementById('file').value;
    const patient = { name, phone, file };
    if (operation === 'new') {
      await patientStore.addPatient(patient);
    } else {
      await patientStore.editPatient(operation, patient);
    }
  }

  form.reset();
}
</script>
<style lang="scss" scoped>
@import '../assets/mixins.scss';

// check media queries
form {
  margin: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    margin: 1rem;
  }

  @include mQ($breakpoint-md) {
    margin: 1.5rem;

    h2 {
      margin: 0.8rem
    }
  }

  @include mQ($breakpoint-sm) {
    margin: 1.2rem;

    h2 {
      margin: 0.6rem
    }
  }



  .flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .container {
    margin: 1rem;

    label {
      margin: 0.5rem;
      font-size: 1.2rem;
    }

    input {
      padding: 0.3rem;
      border: 0;
      border-radius: 1.5rem;
    }

    @include mQ($breakpoint-md) {
      margin: 0.8rem;

      label {
        margin: 0.3rem;
      }

      input {
        padding: 0.2rem;
      }
    }

    @include mQ($breakpoint-sm) {
      margin: 0.6rem;

      label {
        margin: 0.1rem;
      }

      input {
        padding: 0.1rem;
      }
    }

  }

  .select {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;

    select {
      width: 30%;
      margin: 0.4rem auto;
      padding: 0.3rem;
      border: none;
      border-radius: 1rem;
      background-color: $silver;
    }

    #operation {
      margin-top: 0.3rem;
    }

    @include mQ($breakpoint-md) {
      padding: 0.3rem;

      select {
        margin: 0.3rem auto;
        padding: 0.2rem;
      }
    }

    @include mQ($breakpoint-sm) {
      padding: 0.3rem;

      select {
        margin: 0.1rem auto;
        padding: 0.2rem;
      }
    }
  }

  .specialites {
    p {
      margin: 2rem;
      text-align: center;
      font-size: 1.2rem;
    }

    @include mQ($breakpoint-md) {
      margin: 1.5rem;
      font-size: 1rem;
    }

    @include mQ($breakpoint-sm) {
      margin: 1.2rem;
      font-size: 0.8rem;
    }

    @include checkboxes;
  }

  .file {
    label {
      font-size: 1rem;
      cursor: pointer;
      color: $dark;
      background-color: $white;
      border: none;
      border-radius: 1.5rem;
      display: inline-block;
      padding: 0.1rem;

      img {
        margin-left: 0.5rem;
      }

      &:hover {
        color: $green;
      }
    }

    #file::file-selector-button:hover {
      color: $green;
    }

    input[type='file'] {
      display: none;
    }

    @include mQ($breakpoint-md) {
      label {
        font-size: 0.8rem;
      }

      img {
        margin-left: 0.3rem;
      }
    }

    @include mQ($breakpoint-sm) {
      label {
        font-size: 0.6rem;
      }

      img {
        margin-left: 0.1rem;
      }
    }
  }

  button {
    font-size: 1.2rem;
    color: $dark;
    background-color: $silver;
    padding: 0.4rem;
    margin: 1rem;
    border: 0;
    border-radius: 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: $green;
    }

    @include mQ($breakpoint-md) {
      font-size: 1rem;
      padding: 0.3rem;
      margin: 0.8rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 0.8rem;
      padding: 0.2rem;
      margin: 0.6rem;
    }
  }
}
</style>