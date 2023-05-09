import { defineStore } from 'pinia';
// types

export const usePatientStore = defineStore('patients', {
  state: () => ({
    patients: [],
    fakeApi: [
      { name: 'Conny Skegg', phone: '983-680-6313', file: 'fake_path.txt' },
      { name: 'Maible Pordal', phone: '426-858-6432', file: 'fake_path.txt' },
      { name: 'Barny Burth', phone: '478-281-2917', file: 'fake_path.txt' },
      { name: 'Jule Habbin', phone: '781-498-5734', file: 'fake_path.txt' },
      { name: 'Sharlene Kruger', phone: '381-926-4989', file: 'fake_path.txt' },
      {
        name: 'Ermengarde Redmond',
        phone: '207-679-1465',
        file: 'fake_path.txt',
      },
      {
        name: 'Darrick Grishukov',
        phone: '341-410-9901',
        file: 'fake_path.txt',
      },
      { name: 'Alvan Baert', phone: '637-371-0174', file: 'fake_path.txt' },
      { name: 'Eddie Scarlan', phone: '483-422-9030', file: 'fake_path.txt' },
      { name: 'Anson Beagrie', phone: '694-915-1548', file: 'fake_path.txt' },
    ],
  }),
  getters: {
    getPatients(state) {
      return state.patients;
    },
  },
  actions: {
    async getAll() {
      this.patients = this.fakeApi;
    },
    async addPatient(patient) {
      this.fakeApi.push(patient);
    },
    async editPatient(index, patient) {
      this.fakeApi[index] = patient;
    },
    async removePatient(index) {
      this.fakeApi.splice(index, 1);
    },
  },
});
