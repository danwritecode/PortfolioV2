<template>
  <div class="contact">
  <br>
    <b-container>
      <b-row class="text-left">
        <b-col><h1>{{msg}}</h1></b-col>
      </b-row>
      <br>
      <b-row class="text-left">
        <b-col>Email: {{email}}</b-col>
      </b-row>
      <b-row class="text-left">
        <b-col>Twitter: {{twitter}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'CONTACT ME',
      email: 'dnelson4993@gmail.com',
      twitter: 'dannels_io'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
