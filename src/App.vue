<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <SideBar></SideBar>
        </div>
        <div class="col-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    'SideBar': SideBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
