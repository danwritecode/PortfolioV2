<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/home">
          <img src="./assets/dan@dev-logo-B-LogoOnly.png" id = "navbarBranding">
          DAN@DEV
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link" to="/home">HOME</router-link>
            <router-link class="nav-link" to="/blog">BLOG</router-link>
            <router-link class="nav-link" to="/missionstatement">MY MISSION</router-link>
            <router-link class="nav-link" to="/contact">CONTACT</router-link>
            <router-link class="nav-link" to="/writeblog">WRITE NEW BLOG</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#navbarBranding {
  max-width: 40px;
  margin-right: 10px;
}
</style>

<style src='../node_modules/bootstrap/dist/css/bootstrap_lux.min.css'>
    /* global styles */
</style> 
