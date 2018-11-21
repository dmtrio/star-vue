<template>
  <div class="details">
    <PersonDetail v-if="isPersonType" :person="selection"></PersonDetail>
    <FilmDetail v-else-if="isFilmType" :film="selection"></FilmDetail>
    <router-link :to="{ name: 'searchAndResults' }">
      <button>Back to Search</button>
    </router-link>
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
        people: this.$route.query.name
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
}
</script>

<style>

</style>