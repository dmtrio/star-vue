<template>
  <div class="search">
    <h4>What are you searching for?</h4>
    <div>
      <input type="radio" id="people" name="searchtype" value="people" v-model="searchType">
      <label for="people">People</label>
    </div>
    <div>
      <input type="radio" id="movies" name="searchtype" value="movies" v-model="searchType">
      <label for="movies">Movies</label>
    </div>
  <input type="text" id="searchquery" name="search" required v-model="searchQuery">
  <button>SEARCH</button> 
  </div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      searchType: null,
      searchQuery: "",
    }
  },
  methods: {
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