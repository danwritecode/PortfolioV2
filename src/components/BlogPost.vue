<template>
  <div class="blogPost" id="blogPost">
    <br>
    <h1>{{ blogData.Title_Tx }}</h1>
    <h6>Published On: {{ blogData.CreatedOn }}</h6>
    <br>
    <span style="white-space: pre-wrap;">{{ blogData.Body_Tx }}</span>
  </div>
</template>

<script>
export default {
  name: 'blogPost',
  data () {
    return {
      id: 0,
      blogData: null

    }
  },
  created() {
    this.id = this.$route.params.id;
    axios
      .get('https://w1k14u6tm8.execute-api.us-east-2.amazonaws.com/Dev/getblogpostbyid?Blog_Id='+this.id)
      .then(response => (this.blogData = response.data))
      .catch(error => alert(error))
  },
  methods: {
    navigate() {
      router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#blogPost {
  margin: 0 2rem 0 2rem;
  text-align: left;
}
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
