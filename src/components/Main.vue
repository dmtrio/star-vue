<template>
  <div class="main">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    title: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: green;
}
</style>
