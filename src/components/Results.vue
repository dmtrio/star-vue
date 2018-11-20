<template>
  <div class="results">
    <div v-if="isSearching">
      <p>searching</p>
    </div>
    <div v-else-if="hasResults">
      <div v-for="result in results">
        {{result.name}}
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