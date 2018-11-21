<template>
  <div class="details">
    <div> 
      <p>There are zero matches.</p>
      <p>Use the form to search for People or Movies</p>
    </div>
  </div>
</template>

<script>
import apiService from '../utils/apiService.js'
export default {
  name: 'details',
  data() {
    return {
      person: null
    }
  },
  beforeMount() {
      apiService.init().search('people', this.$route.params.person)
      .then((data) => {this.person = data.results[0]});  
      console.log(this.person)
  },
  computed: {
  },
  methods: {
    getData () {

    }
  }
}
</script>

<style>
.search {
  display: flex;
  flex-direction: column;
  height: 230px;
  width: 410px;
}
.search h4 {

}

.search div {
  
}
</style>