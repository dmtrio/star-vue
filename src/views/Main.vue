<template>
  <div class="main">
    <!-- LawnStarter -->
    <Search 
      @updateData="setData" 
      @updateSearching="setSearching"
    ></Search>
    <Results 
      :results="results"
      :searching="searching"
    ></Results>
  </div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      data: null,
      results: null,
      searching: false,
    }
  },
  methods: {
    setData (data) {
      // console.log('called', data)
      this.searching = false
      this.data = data
      this.results = data.results
    },
    setSearching () {
      console.log('searching')
      this.searching = true
    }
  }
}
</script>

<style>
.main {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  flex-direction: row;

}
</style>