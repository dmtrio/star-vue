<template>
  <div>
    <div>
      {{film.title}}
    </div>
    <div>
      <h4>Details</h4>
      <div>

      </div>
    </div>
    <div>
      <h4>Movies</h4>
      <div>
        <!-- <p v-for="film in person.films">
          {{film}}
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filmDetails',
  props: ['film'], 
  computed: {
  },
  methods: {
  }
}
</script>

<style>

</style>