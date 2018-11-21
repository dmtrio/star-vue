<template>
  <div class="main">
    <Search 
      @updateData="setDetail" 
      @updateSearching="setSearching"
    ></Search>
    <div class="spacer--30-30"></div>
    <Results 
      :data="data"
      :searching="searching"
    ></Results>
  </div>
</template>

<script>
export default {
  name: 'main',
  props: [],
  data() {
    return {
      searching: false,
      data: null,
    }
  },
  methods: {
    setDetail (data) {
      // console.log('called', data)
      this.searching = false
      this.data = data
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