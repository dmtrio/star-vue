<template>
  <div>
    <div>
      {{person.name}}
    </div>
    <div>
      <h4>Details</h4>
      <div>
        <p>Birth Year: {{person.birth_year}}</p>
        <p>Gender: {{person.gender}}</p>
        <p>Eye Color: {{person.eye_color}}</p>
        <p>Hair Color: {{person.hair_color}}</p>
        <p>Height: {{person.height}}</p>
        <p>Mass: {{person.mass}}</p>
      </div>
    </div>
    <div>
      <h4>Movies</h4>
      <div>
        <p v-for="(film, index) in person.films" :key="index">
          {{film}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personDetails',
  props: ['person'],
  computed: {
  },
  methods: {
  }
}
</script>

<style>

</style>
