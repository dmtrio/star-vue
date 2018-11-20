<template>
  <div class="search">
    <h4>What are you searching for?</h4>
    <div>
      <input type="radio" id="people" name="searchtype" value="people" v-model="searchType" checked="checked">
      <label for="people">People</label>
    </div>
    <div>
      <input type="radio" id="movies" name="searchtype" value="movies" v-model="searchType">
      <label for="movies">Movies</label>
    </div>
  <input :placeholder="placeholder" v-model="searchQuery" type="text" id="searchquery" name="search" required>
  <button v-on:click="onSumbit" type="submit" class="submit-name" value="" :disabled="submitEnabled" >SEARCH</button> 
  </div>
</template>

<script>
import apiService from '../utils/apiService.js'
export default {
  name: 'search',
  data() {
    return {
      searchType: 'people',
      searchQuery: '',
    }
  },
  computed: {
    placeholder() {
      const placeholderText = {
        people: "this is for peeps",
        movies: "this is for movies",
      } 
      return placeholderText[this.searchType]
    },
    submitEnabled() {
      return this.searchQuery.length > 0 ? null : 'disabled'
    }
  },
  methods: {
    onSumbit (e) {
      this.$emit('searching')
       apiService.init().search(this.searchType, this.searchQuery)
       .then((data) => {this.$emit('updateData', data)});  
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