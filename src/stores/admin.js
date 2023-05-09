import { defineStore } from 'pinia';

export const useAdminStore = defineStore('admins', {
  state: () => ({
    admins: [],
    fakeApi: [
      { username: 'admin', password: '123456' },
      { username: 'fake admin', password: 'fakePassword' },
      { username: 'not @dm1n', password: 'not a password' },
    ],
    isLoggedIn: null,
  }),
  getters: {
    getAdmins(state) {
      return state.admins;
    },
  },
  actions: {
    async getAll() {
      this.admins = this.fakeApi;
    },
    async login(username, password) {
      this.getAll();
      for (let admin of this.admins) {
        if (admin.username !== username) {
          this.isLoggedIn = false;
          continue;
        }
        if (admin.password == password) {
          this.isLoggedIn = true;
          break;
        }
        this.isLoggedIn = false;
      }
      sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
    },
  },
});
