import { defineStore } from 'pinia';
export const useDoctorStore = defineStore('doctors', {
  state: () => ({
    doctors: [],
    fakeApi: [
      {
        name: 'Virgie Gercken',
        phone: '878-918-3413',
        specialities: [
          'Allergy and immunology',
          'Anesthesiology',
          'Psychiatry',
          'Surgery',
        ],
      },
      {
        name: 'Gerri Argente',
        phone: '400-327-0901',
        specialities: [
          'Allergy and immunology',
          'Anesthesiology',
          'Psychiatry',
          'Surgery',
        ],
      },
      {
        name: 'Hermia Jerrans',
        phone: '977-571-1517',
        specialities: [
          'Family medicine',
          'Neurology',
          'Physical medicine and rehabilitation',
          'Preventive medicine',
          'Psychiatry',
          'Surgery',
        ],
      },
      {
        name: 'Kary Shapero',
        phone: '246-712-9124',
        specialities: [
          'Allergy and immunology',
          'Anesthesiology',
          'Dermatology',
          'Emergency medicine',
          'Family medicine',
        ],
      },
      {
        name: 'Yorgo Paroni',
        phone: '937-933-9684',
        specialities: [
          'Allergy and immunology',
          'Anesthesiology',
          'Dermatology',
          'Emergency medicine',
          'Psychiatry',
          'Surgery',
        ],
      },
      {
        name: 'Glynis Blanden',
        phone: '837-828-7194',
        specialities: [
          'Allergy and immunology',
          'Anesthesiology',
          'Dermatology',
          'Emergency medicine',
        ],
      },
      {
        name: 'Giffer Winslade',
        phone: '147-729-0041',
        specialities: [
          'Allergy and immunology',
          'Anesthesiology',
          'Dermatology',
          'Surgery',
        ],
      },
      {
        name: 'Ethelind Feilden',
        phone: '837-147-3524',
        specialities: [
          'Physical medicine and rehabilitation',
          'Preventive medicine',
          'Psychiatry',
          'Surgery',
        ],
      },
      {
        name: 'Marta Nizet',
        phone: '805-846-3369',
        specialities: [
          'Allergy and immunology',
          'Anesthesiology',
          'Dermatology',
          'Surgery',
        ],
      },
      {
        name: 'Tristan McEttigen',
        phone: '920-358-4669',
        specialities: [
          'Allergy and immunology',
          'Family medicine',
          'Neurology',
          'Physical medicine and rehabilitation',
          'Preventive medicine',
          'Psychiatry',
          'Surgery',
        ],
      },
    ],
    // Centeralizing Business data that will not change
    specialities: [
      'Allergy and immunology',
      'Anesthesiology',
      'Dermatology',
      'Emergency medicine',
      'Family medicine',
      'Neurology',
      'Physical medicine and rehabilitation',
      'Preventive medicine',
      'Psychiatry',
      'Surgery',
    ],
  }),
  getters: {
    getDoctors(state) {
      return state.doctors;
    },
    getSpecialities(state) {
      return state.specialities;
    },
  },
  actions: {
    async getAll() {
      this.doctors = this.fakeApi;
    },
    async addDoctor(doctor) {
      this.fakeApi.push(doctor);
    },
    async editDoctor(index, doctor) {
      this.fakeApi[index] = doctor;
    },
    async removeDoctor(index) {
      this.fakeApi.splice(index, 1);
    },
  },
});
