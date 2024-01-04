<template>
  <navbar-component></navbar-component>
  <router-view />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  components: {
    NavbarComponent
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Arial;
}

#page-wrap {
  margin: auto;
  max-width: 800px;
  min-height: 100vh;
}

button {
  background-color: #41B883;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: 0;
  padding: 16px;
}
</style>