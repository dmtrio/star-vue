<template>
  <div class="results shadow-standard box-standard">
    <h4 class="title"> Results</h4>
    <div v-if="isSearching">
      <p>searching</p>
    </div>
    <div v-else-if="hasResults">
      <div v-for="result in results">
        <div>{{result.name}}</div>
        <button>See Details</button>
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
  props: ['results', 'searching'],
  data() {
    return {
    }
  },
  computed: {
    hasResults () {
      return this.results
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