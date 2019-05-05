<template>
  <div style="text-align:left; margin:0 1rem 0 1rem">
    <br>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <h3>Blog Title</h3>

      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.Title_Tx"
          required
          placeholder="Enter Blog Title"></b-form-input>
      </b-form-group>

      <h3>Blog Abstract</h3>

      <b-form-textarea
        id="textarea"
        v-model="form.Abstract_Tx"
        required
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      
      <br>

      <h3>Blog Body</h3>

      <b-form-textarea
        id="textarea"
        v-model="form.Body_Tx"
        required
        placeholder="Enter something..."
        rows="10"
        max-rows="6"
      ></b-form-textarea>

      <br>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        form: {
          Title_Tx: '',
          Abstract_Tx: '',
          Body_Tx: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        axios.post("https://w1k14u6tm8.execute-api.us-east-2.amazonaws.com/Dev/createblogpost",JSON.stringify(this.form))
        .then(function(response) {
          alert(response);
        })
        .catch(function(error) {
          alert(error);
        })
        //alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.Title_Tx = ''
        this.form.Abstract_Tx = ''
        this.form.Body_Tx = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
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
