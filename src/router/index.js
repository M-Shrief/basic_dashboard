import { createRouter, createWebHistory } from 'vue-router';
const Auth = () => import('@/pages/Auth.vue');
const Doctors = () => import('@/pages/Doctors.vue');
const Patients = () => import('@/pages/Patients.vue');

function guard(to, from, next) {
  let isAuthenticated = false;
  // this is just an example. we will have to find a better and centralised way to handle our authentication
  // and we shouldn't use localStorage nethier sessionStorage best practice is to use (cookie with secure=true).
  // that's done while cooperation with our backend.
  if (sessionStorage.getItem('isLoggedIn')) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next('/'); // go to main page to authenticate;
  }
}

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth,
  },
  {
    path: '/doctors',
    name: 'doctors',
    beforeEnter: guard,
    component: Doctors,
  },
  {
    path: '/patients',
    name: 'patients',
    beforeEnter: guard,
    component: Patients,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
