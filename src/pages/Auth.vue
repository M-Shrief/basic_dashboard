<template>
  <form @submit.prevent="login">
    <h2>Login to Dashboard</h2>
    <div class="container">
      <label for="username">Username: </label>
      <input type="text" name="username" id="username" required maxlength="50">
    </div>
    <div class="container">
      <label for="password">password: </label>
      <input type="text" name="password" id="password" required maxlength="20">
    </div>
    <span>{{ error }}</span>
    <button type="submit" value="Submit">Submit</button>
  </form>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAdminStore } from '../stores/admin'

const router = useRouter();

const adminStore = useAdminStore();
const isLoggedIn = computed(() => {
  return adminStore.isLoggedIn
})
let error = ref(null)

const login = async () => {
  try {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    await adminStore.login(username, password);
    if (isLoggedIn.value === true) return router.push('/doctors');
    return error.value = "Data's not valid";
  } catch (error) {
    console.log(error)
  }
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

  @include mQ($breakpoint-md) {
    margin: 1.5rem;
  }

  @include mQ($breakpoint-sm) {
    margin: 1.2rem;
  }

  h2 {
    margin: 1rem;
  }

  .container {
    label {
      margin: 0.5rem;
      font-size: 1.2rem;
    }

    input {
      padding: 0.3rem;
      border: 0;
      border-radius: 1.5rem;
    }

  }

  span {
    color: red;
    font-size: 0.9rem;
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
      margin: 0.8rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 0.8rem;
      margin: 0.8rem;
    }

  }

}
</style>