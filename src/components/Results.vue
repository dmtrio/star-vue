<template>
  <div class="results shadow-standard box-standard">
    <h4 class="title"> Results</h4>
    <div v-if="isSearching">
      <p>searching</p>
    </div>
    <div v-else-if="hasResults">
      <div v-for="result in data.results">
        <div>{{result.name}}{{result.title}}</div>
        <router-link :to="{ name: 'details', query: { type: data.resultsType, name: result.name, title: result.title }, params: {result: result, type: data.resultsType}}">
          <button>See Details</button>
        </router-link>
      </div>
    </div>
    <div v-else> 
      <p>There are zero matches.</p>
      <p>Use the form to search for People or Movies</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'results',
  props: ['data', 'searching'],
  data() {
    return {
    }
  },
  computed: {
    hasResults () {
      return this.data && this.data.results
    },
    isSearching () {
      return this.searching
    }
  }
}
</script>

<style>
.results {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  width: 522px;
  padding: 30px
}
.search h4 {

}

.search div {
  
}
</style>