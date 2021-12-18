<template>
  <div class="home">
    <h1>Practice your web development skills</h1>
    <router-link class="link" to="/dashboard">Get Started</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: rgb(24, 24, 24);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.link {
  text-decoration: none;
  padding: 0.7rem 2rem;
  border: none;
  margin-top: 2rem;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  background: rgb(50, 129, 57);
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background: rgb(36, 92, 41);
  }
}
</style>
