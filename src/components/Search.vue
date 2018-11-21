<template>
  <div class="search shadow-standard box-standard">
    <h4 class="title">What are you searching for?</h4>
    <div>
      <input type="radio" id="people" name="searchtype" value="people" v-model="searchType" checked="checked">
      <label for="people">People</label>
      <input type="radio" id="movies" name="searchtype" value="movies" v-model="searchType">
      <label for="movies">Movies</label>
    </div>
    <input :placeholder="placeholder" v-model="searchQuery" type="text" id="searchquery" name="search" required>
    <button v-on:click="onSumbit" type="submit" class="button_submit" value="" :disabled="submitEnabled" >SEARCH</button> 
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
      this.$emit('updateSearching')
       apiService.init().search(this.searchType, this.searchQuery)
       .then((data) => {this.$emit('updateData', data)});  
    }
  }
}
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: column;
  height: 170px;
  width: 350px;
}
.search > * {
  margin-bottom: 20px;
}

input[type="radio"] {
  width: 16px;
  height: 16px;
  background-color: #0094ff;
}

label {
  height: 16px;
  margin-right: 30px;
  font-size: 14px;
  font-weight: bold;
}

#searchquery {
  height: 40px;
  padding: 10px;

  border: 1px solid #dadada;
  border-radius: 4px;

  box-shadow: inset 0 1px 3px 0 rgba(132, 132, 132, 0.75);
  background-color: #ffffff;
}
 
input::placeholder { 
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #c4c4c4;
}

.button_submit {
  height: 34px;
  width: 350px;
  border-radius: 20px;
  margin-bottom: 0px
}
</style>