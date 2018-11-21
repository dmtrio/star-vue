<template>
  <div class="main">
    <Search 
      @updateData="updateData" 
      @updateSearching="setSearching"
    ></Search>
    <div class="spacer--30-30"></div>
    <Results 
      :results="results"
      :searching="searching"
    ></Results>
  </div>
</template>

<script>
export default {
  name: 'main',
  props: ['results', 'searching'],
  data() {
    return {
      searching: false,
    }
  },
  methods: {
    updateData (data) {
      this.$emit('updateData', data)
    },
    setSearching () {
      this.searching = true
    }
  }
}
</script>

<style>
.main {
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.spacer--30-30 {
  width: 30px;
  height: 30px;
}
</style>