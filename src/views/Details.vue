<template>
  <div class="details">
    <div v-if="isPersonType">
      <PersonDetail :person="selection"></PersonDetail>
    </div>
    <div v-else-if="isFilmType">
      <MovieDetail :film="selection"></MovieDetail>
    </div>
  </div>
</template>

<script>
import apiService from '../utils/apiService.js'
export default {
  name: 'details',
  props: ['result', 'type'],
  data() {
    return {
      selection: this.result
    }
  },
  beforeMount() {
      const type = this.$route.query.type;
      const query = {
        films: this.$route.query.title,
        person: this.$route.query.name
      }
      if (!this.selection) {
        apiService.init().search(type, query[type])
        .then((data) => {this.selection = data.results[0]});  
      }
  },
  computed: {
    isPersonType () {
      return this.$route.query.type === 'people' && this.selection;
    },
    isFilmType () {
      return this.$route.query.type === 'films' && this.selection;
    }
  },
  methods: {
  }
}
</script>

<style>

</style>