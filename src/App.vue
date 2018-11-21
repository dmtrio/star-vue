<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  background-color: #ededed;
}

#app {
  font-family: 'Montserrat', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

 /* standards */
.shadow-standard {
  box-shadow: 0px 1px 2px 0px rgba(132, 132, 132, 0.75);
}

.box-standard {
  background-color: #ffffff;
  border: 1px solid #dadada;
  border-radius: 4px;
  padding: 30px;
}

.title {
  height: 18px;
  margin: 0;
  text-align: left;
}
</style>
