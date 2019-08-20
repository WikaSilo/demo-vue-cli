<template>
  <div>
    <h1>{{ car.name }}</h1>
    <img :src="car.image">
  </div>
</template>

<script>
import axios from '@/apis/server.js'

export default {
  name: 'detail',
  data: function () {
    return {
      car: {}
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    '$route.params.id': function () {
      this.fetchData()
    }
  },
  methods: {
    fetchData () {
      const id = this.$route.params.id
      axios.get(`/cars/${id}`)
        .then(({ data }) => {
          this.car = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
